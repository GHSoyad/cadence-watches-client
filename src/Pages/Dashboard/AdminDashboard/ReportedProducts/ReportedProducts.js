import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import ConfirmModal from '../../../../Components/ConfirmModal/ConfirmModal';
import Loader from '../../../../Components/Loader/Loader';

const ReportedProducts = () => {

    const [productInfo, setProductInfo] = useState(null);

    // Get reported products data
    const { isLoading, data: reportedProducts, refetch } = useQuery({
        queryKey: ['reportedProducts'],
        queryFn: () => axios.get('https://cadence-watches-server.vercel.app/report/products', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('cadenceSecretToken')}`
            }
        })
            .then(data => data.data)
    })

    // Delete reported product
    const handleDelete = (product) => {
        const productId = product.productId;

        fetch(`https://cadence-watches-server.vercel.app/report/products/${productId}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('cadenceSecretToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Product deleted!');
                    refetch();
                }
            })
    }

    return (
        <div>
            <Helmet><title>Reported Products- Cadence</title></Helmet>
            <h2 className='text-center text-2xl font-medium pb-4'>Reported Products</h2>
            {
                isLoading ?
                    <Loader>Loading Reported Products...</Loader>
                    : reportedProducts.length === 0 ?
                        <div className='text-center pt-6'>
                            <p className='text-xl font-medium pb-4'>No reported products found</p>
                        </div>
                        :
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead className='text-base'>
                                    <tr>
                                        <th>No.</th>
                                        <th>Product</th>
                                        <th>Reporter</th>
                                        <th>Seller</th>
                                        <th className='text-center'>Delete</th>
                                    </tr>
                                </thead>
                                {
                                    reportedProducts.map((product, i) =>
                                        <tbody key={product._id}>
                                            <tr className='text-sm'>
                                                <th>{i + 1}</th>
                                                <td>{product.product}</td>
                                                <td>{product.reporter}</td>
                                                <td>{product.sellerEmail}</td>
                                                <td className='text-center py-0'><label onClick={() => setProductInfo(product)} htmlFor="confirm-modal" className='btn btn-xs hover:glass'>Delete</label></td>
                                            </tr>
                                        </tbody>)
                                }
                            </table>
                            {
                                productInfo &&
                                <ConfirmModal modalData={productInfo} closeModal={setProductInfo} confirm={handleDelete}>
                                    <h3 className="font-bold text-lg">Delete Seller?</h3>
                                    <p className="py-4"><span className='font-bold text-red-500'>{productInfo.product}</span> will be deleted permanently!</p>
                                </ConfirmModal>
                            }
                        </div>
            }
        </div>
    );
};

export default ReportedProducts;