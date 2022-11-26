import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmModal from '../../../../Components/ConfirmModal/ConfirmModal';
import Loader from '../../../../Components/Loader/Loader';

const AllBuyers = () => {

    const [buyerInfo, setBuyerInfo] = useState(null);
    const { isLoading, data: buyers, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: () =>
            axios.get('http://localhost:5000/users?role=buyer')
                .then(data => data.data)
    })

    const handleDelete = (data) => {
        const id = data._id;
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
                                buyers.map((buyer, i) =>
                                    <tbody key={buyer._id}>
                                        <tr className='text-sm'>
                                            <th>{i + 1}</th>
                                            <td>{buyer.name}</td>
                                            <td>{buyer.email}</td>
                                            <td className='text-center py-0'><label onClick={() => setBuyerInfo(buyer)} htmlFor="confirm-modal" className='btn btn-xs hover:glass'>Delete</label></td>
                                        </tr>
                                    </tbody>)
                            }
                        </table>
                        {
                            buyerInfo &&
                            <ConfirmModal modalData={buyerInfo} closeModal={setBuyerInfo} confirm={handleDelete} title={'Delete Buyer'} message={`${buyerInfo.name} will be deleted permanently!`}></ConfirmModal>
                        }
                    </div>
            }
        </>
    );
};

export default AllBuyers;