import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';

const AddProduct = () => {

    const { userInfo } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    const { isLoading, data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: () =>
            fetch('http://localhost:5000/categories')
                .then(res => res.json())
    })

    const handleForm = (data) => {
        const sellerName = userInfo?.displayName;
        const sellerEmail = userInfo.email;
        console.log(data, sellerName, sellerEmail)
    }

    return (
        <div>
            <h2 className='text-center text-2xl font-medium'>Add a Product</h2>
            <form onSubmit={handleSubmit(handleForm)} className='max-w-md pt-6 rounded-lg flex flex-col gap-4 flex-1 mx-auto'>
                <input {...register('name')} type="text" placeholder="Product Name" className="input input-bordered w-full" required />
                <input {...register('location')} type="text" placeholder="Location" className="input input-bordered w-full" required />
                <div className='flex gap-4'>
                    <input {...register('originalPrice')} type="number" placeholder="Original Price" className="input input-bordered w-full" required />
                    <input {...register('resalePrice')} type="number" placeholder="Resale Price" className="input input-bordered w-full" required />
                </div>
                <div className='flex gap-4'>
                    <input {...register('yearsPurchased')} type="number" placeholder="Year of Purchase" className="input input-bordered w-full" required />
                    <input {...register('yearsUsed')} type="number" placeholder="Years of Use" className="input input-bordered w-full" required />
                </div>
                <div className='flex flex-col sm:flex-row gap-4 justify-between'>
                    <select {...register('category')} className="select select-bordered border-2 flex-1" required>
                        {
                            isLoading ?
                                <option value=''>Loading Category</option>
                                :
                                <>
                                    <option value=''>Select Category</option>
                                    {
                                        categories.map(category => <option key={category._id} value={category.name}>{category.name}</option>)
                                    }
                                </>
                        }
                    </select>
                    <select {...register('condition')} className="select select-bordered border-2 flex-1" required>
                        <option value=''>Select Condition</option>
                        <option value='Excellent'>Excellent</option>
                        <option value='Good'>Good</option>
                        <option value='Fair'>Fair</option>
                    </select>
                </div>
                <input {...register('image')} type="file" className="file-input file-input-bordered w-full" required />
                <button className='btn btn-neutral-content hover:glass border-0 mt-4'>Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;