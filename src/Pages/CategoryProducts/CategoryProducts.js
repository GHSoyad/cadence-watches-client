import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { format } from 'date-fns/esm';
import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import BookingModal from '../../Components/BookingModal/BookingModal';
import ConfirmModal from '../../Components/ConfirmModal/ConfirmModal';
import Loader from '../../Components/Loader/Loader';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const CategoryProducts = () => {

    const { userInfo, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [bookProduct, setBookProduct] = useState(null);
    const [reportProduct, setReportProduct] = useState(null);
    const categoryId = useLoaderData();

    // Get reports data
    const { isLoading, data: products, refetch } = useQuery({
        queryKey: ['products', categoryId],
        queryFn: () =>
            axios.get(`http://localhost:5000/category/${categoryId}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('cadenceSecretToken')}`
                }
            })
                .then(data => data.data)
                .catch(error => {
                    if (error.response.status === 401 || 403) {
                        signOutUser();
                        navigate('/login');
                    }
                })
    })

    // Post report
    const handleReport = (product) => {
        const reportedProduct = {
            productId: product._id,
            reporter: userInfo.email,
            reportDate: format(new Date(), 'PPPpp'),
            sellerEmail: product.sellerEmail,
            product: product.name,
        }

        fetch('http://localhost:5000/report/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('cadenceSecretToken')}`
            },
            body: JSON.stringify(reportedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Product Reported');
                }
                if (data.message) {
                    toast.error(data.message)
                }
            })
            .catch(error => toast.error(error.message))
    }

    return (
        <div className='container mx-auto max-w-screen-xl px-2 md:px-4 xl:px-0 mt-10'>
            <Helmet><title>{categoryId} - Cadence</title></Helmet>
            <h2 className='text-center text-2xl font-bold'>{categoryId} - {products && products.length} <span className='text-xl font-medium'>Products</span></h2>
            <div className='divider bg-neutral-content h-0.5 opacity-50 mt-2 mb-6'></div>
            {
                isLoading ?
                    <Loader>Loading Products...</Loader>
                    :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            products.map(product => <ProductCard key={product._id} product={product} setBookProduct={setBookProduct} setReportProduct={setReportProduct}></ProductCard>)
                        }
                    </div>
            }
            {
                bookProduct &&
                <BookingModal bookProduct={bookProduct} refetch={refetch} setBookProduct={setBookProduct}></BookingModal>
            }
            {
                reportProduct &&
                <ConfirmModal modalData={reportProduct} closeModal={setReportProduct} confirm={handleReport}>
                    <h3>Are you sure you want to report {reportProduct.name}</h3>
                </ConfirmModal>
            }
        </div>
    );
};

export default CategoryProducts;