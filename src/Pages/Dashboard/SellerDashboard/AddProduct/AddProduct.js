import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import FormLoader from '../../../../Components/FormLoader/FormLoader';

const AddProduct = () => {

    const { userInfo } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const [formLoading, setFormLoading] = useState(false);

    const { isLoading, data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: () =>
            fetch('http://localhost:5000/categories')
                .then(res => res.json())
    })

    const { isLoading: userLoading, data: user } = useQuery({
        queryKey: ['user', userInfo?.email],
        queryFn: () =>
            fetch(`http://localhost:5000/user?email=${userInfo.email}`)
                .then(res => res.json())
    })

    const handleForm = (data) => {
        setFormLoading(true);
        const sellerName = user.name;
        const sellerEmail = user.email;
        const sellerStatus = user.status;
        const date = format(new Date(), 'PPPpp');
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_Imgbb_API_KEY}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const imgURL = imgData.data.url;

                    const product = {
                        sellerName,
                        sellerEmail,
                        sellerStatus,
                        name: data.name,
                        description: data.description,
                        image: imgURL,
                        phone: data.phone,
                        location: data.location,
                        originalPrice: data.originalPrice,
                        resalePrice: data.resalePrice,
                        yearPurchased: data.yearPurchased,
                        yearsUsed: data.yearsUsed,
                        category: data.category,
                        condition: data.condition,
                        datePosted: date,
                        status: 'available'
                    }

                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('cadenceSecretToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('Product Added to Sale.');
                                reset();
                            }
                        })
                        .catch(error => toast.error(error.message))
                        .finally(() => setFormLoading(false))
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='relative'>
            {
                formLoading && <FormLoader>Adding Product...</FormLoader>
            }
            <h2 className='text-center text-2xl font-medium pb-4'>Add a Product</h2>
            <form onSubmit={handleSubmit(handleForm)} className='max-w-md rounded-lg flex flex-col gap-4 flex-1 mx-auto'>
                <input {...register('name')} type="text" placeholder="Product Name" className="input input-bordered w-full" required />
                <textarea {...register('description')} className="textarea textarea-bordered w-full" placeholder="Description" required></textarea>
                <input {...register('phone')} type="text" placeholder="Phone Number" className="input input-bordered w-full" required />
                <input {...register('location')} type="text" placeholder="Location" className="input input-bordered w-full" required />
                <div className='flex gap-4'>
                    <input {...register('originalPrice')} type="number" placeholder="Original Price" className="input input-bordered w-full" required />
                    <input {...register('resalePrice')} type="number" placeholder="Resale Price" className="input input-bordered w-full" required />
                </div>
                <div className='flex gap-4'>
                    <input {...register('yearPurchased')} type="month" placeholder="Year of Purchase" className="input input-bordered w-full" required />
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
                <button className='btn bg-base-300 hover:glass border-0 mt-4' disabled={userLoading || formLoading}>Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;