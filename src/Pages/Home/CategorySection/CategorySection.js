import React from 'react';
import CategoryCard from '../../../Components/CategoryCard/CategoryCard';

const CategorySection = () => {
    const categories = [
        { id: 'Analogue', name: 'Analogue', image: 'https://i.ibb.co/YtMXW0S/analogue-watch.jpg' },
        { id: 'Digital', name: 'Digital', image: 'https://i.ibb.co/Rc75NNN/digital-watch.jpg' },
        { id: 'Hybrid', name: 'Hybrid', image: 'https://i.ibb.co/48gG0Jg/hybrid-watch.jpg' },
        { id: 'Smart', name: 'Smart', image: 'https://i.ibb.co/jvxPm85/smart-watch.jpg' }
    ]

    return (
        <div>
            <h2 className='text-2xl font-bold'>Categories</h2>
            <div className='divider bg-neutral-content h-0.5 opacity-50 mt-2'></div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {
                    categories.map(category => <CategoryCard key={category.id} category={category}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default CategorySection;