import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../../Components/ProductCard/ProductCard';

const CategoryProducts = () => {


    const categoryId = useLoaderData();
    const { isLoading, data: products } = useQuery({
        queryKey: ['products', categoryId],
        queryFn: () =>
            axios.get(`http://localhost:5000/category/${categoryId}`)
                .then(data => data.data)
    })

    return (
        <div className='container mx-auto max-w-screen-lg mt-10'>
            <h2 className='text-center text-2xl font-bold'>{categoryId} Category</h2>
            <h2 className='text-center text-lg font-medium'>{products && products.length} products in this category</h2>
            <div className='divider bg-neutral-content h-0.5 opacity-50 mt-2'></div>
            {
                isLoading ?
                    <p>Loading</p>
                    :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default CategoryProducts;