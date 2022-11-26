import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../../../Components/Loader/Loader';

const AllBuyers = () => {

    const { isLoading, data: buyers, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: () =>
            axios.get('http://localhost:5000/users?role=buyer')
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
                    toast.success('Buyer deleted!');
                    refetch();
                }
            })
    }


    return (
        <>
            {
                isLoading ?
                    <Loader>Loading Buyers...</Loader>
                    :
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead className='text-base'>
                                <tr>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th className='text-center'>Delete</th>
                                </tr>
                            </thead>
                            {
                                buyers.map((seller, i) =>
                                    <tbody key={seller._id}>
                                        <tr className='text-sm'>
                                            <th>{i + 1}</th>
                                            <td>{seller.name}</td>
                                            <td>{seller.email}</td>
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

export default AllBuyers;