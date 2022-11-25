import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../../Components/Loader/Loader';

const AllSellers = () => {

    const { isLoading, data: sellers, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: () =>
            axios.get('http://localhost:5000/users?role=seller')
                .then(data => data.data)
    })

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('cadenceSecretToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Seller deleted!');
                    refetch();
                }
            })
    }

    const handleVerify = (email) => {
        fetch(`http://localhost:5000/users?email=${email}`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('cadenceSecretToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Seller Verified!');
                    refetch();
                }
            })
    }

    return (
        <>
            {
                isLoading ?
                    <Loader></Loader>
                    :
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead className='text-base'>
                                <tr>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th className='text-center'>Verify</th>
                                    <th className='text-center'>Delete</th>
                                </tr>
                            </thead>
                            {
                                sellers.map((seller, i) =>
                                    <tbody key={seller._id}>
                                        <tr className='text-sm'>
                                            <th>{i + 1}</th>
                                            <td>{seller.name}</td>
                                            <td>{seller.email}</td>
                                            <td className='text-center py-0'>{seller?.status === 'verified' ? 'Verified' : <button onClick={() => handleVerify(seller.email)} className='btn btn-xs hover:glass'>Verify</button>}</td>
                                            <td className='text-center py-0'><button onClick={() => handleDelete(seller._id)} className='btn btn-xs hover:glass'>Delete</button></td>
                                        </tr>
                                    </tbody>)
                            }
                        </table>
                    </div>
            }
        </>
    );
};

export default AllSellers;