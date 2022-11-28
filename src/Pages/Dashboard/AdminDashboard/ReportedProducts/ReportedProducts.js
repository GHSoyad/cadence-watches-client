import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmModal from '../../../../Components/ConfirmModal/ConfirmModal';
import Loader from '../../../../Components/Loader/Loader';

const ReportedProducts = () => {

    const [productInfo, setProductInfo] = useState(null);

    const { isLoading, data: reportedProducts, refetch } = useQuery({
        queryKey: ['reportedProducts'],
        queryFn: () => axios.get('http://localhost:5000/report/products', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('cadenceSecretToken')}`
            }
        })
            .then(data => data.data)
    })

    const handleDelete = (product) => {
        const productId = product.productId;

        fetch(`http://localhost:5000/report/products/${productId}`, {
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
            <h2 className='text-center text-2xl font-medium pb-4'>Reported Products</h2>
            {
                isLoading ?
                    <Loader>Loading Reported Products...</Loader>
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
                                <p className="py-4"><span className='font-bold text-red-500'>"{productInfo.name}"</span> will be deleted permanently!</p>
                            </ConfirmModal>
                        }
                    </div>
            }
        </div>
    );
};

export default ReportedProducts;