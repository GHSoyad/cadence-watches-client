import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import CategoryCard from '../../../Components/CategoryCard/CategoryCard';

const CategorySection = () => {

    const { isLoading, data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: () =>
            axios.get('http://localhost:5000/categories')
                .then(data => data.data)
    })

    return (
        <div>
            <h2 className='text-2xl font-bold'>Categories</h2>
            <div className='divider bg-neutral-content h-0.5 opacity-50 mt-2'></div>
            {
                isLoading ?
                    <p>loading</p>
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