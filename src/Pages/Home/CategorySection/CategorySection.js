import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import CategoryCard from '../../../Components/CategoryCard/CategoryCard';
import Loader from '../../../Components/Loader/Loader';

const CategorySection = () => {

    const { isLoading, data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: () =>
            axios.get('http://localhost:5000/categories')
                .then(data => data.data)
    })

    return (
        <div className='container mx-auto max-w-screen-xl px-2 md:px-4 xl:px-0'>
            <h2 className='text-2xl font-bold'>Categories</h2>
            <div className='divider bg-neutral-content h-0.5 opacity-50 mt-2 mb-6'></div>
            {
                isLoading ?
                    <Loader>Loading Categories...</Loader>
                    :
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                        {
                            categories.map(category => <CategoryCard key={category.id} category={category}></CategoryCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default CategorySection;