import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Loader from '../../../../Components/Loader/Loader';

const ReportedProducts = () => {

    const { isLoading, data: reportedProducts } = useQuery({
        queryKey: ['reportedProducts'],
        queryFn: () => axios.get('http://localhost:5000/report/products', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('cadenceSecretToken')}`
            }
        })
            .then(data => data.data)
    })

    return (
        <div>
            <h2 className='text-center text-2xl font-medium pb-4'>All Sellers</h2>
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
                                            <td className='text-center py-0'><label htmlFor="confirm-modal" className='btn btn-xs hover:glass'>Delete</label></td>
                                        </tr>
                                    </tbody>)
                            }
                        </table>

                    </div>
            }
        </div>
    );
};

export default ReportedProducts;