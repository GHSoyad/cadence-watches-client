import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import BookingModal from '../../Components/BookingModal/BookingModal';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const CategoryProducts = () => {

    const { signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [bookProduct, setBookProduct] = useState(null);

    const categoryId = useLoaderData();
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

    return (
        <div className='container mx-auto max-w-screen-xl px-2 md:px-4 xl:px-0 mt-10'>
            <h2 className='text-center text-2xl font-bold'>{categoryId} Category</h2>
            <h2 className='text-center text-lg font-medium'>{products && products.length} products in this category</h2>
            <div className='divider bg-neutral-content h-0.5 opacity-50 mt-2'></div>
            {
                isLoading ?
                    <p>Loading</p>
                    :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            products.map(product => <ProductCard key={product._id} product={product} setBookProduct={setBookProduct}></ProductCard>)
                        }
                    </div>
            }
            {
                bookProduct &&
                <BookingModal bookProduct={bookProduct} refetch={refetch} setBookProduct={setBookProduct}></BookingModal>
            }
        </div>
    );
};

export default CategoryProducts;