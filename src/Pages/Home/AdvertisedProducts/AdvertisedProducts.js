import React from 'react';
import AdvertisedProductCard from './AdvertisedProductCard';

const AdvertisedProducts = ({ advertisedProducts }) => {
    return (
        <div>
            <h2 className='text-2xl font-bold'>Advertised Products</h2>
            <div className='divider bg-neutral-content h-0.5 opacity-50 mt-2 mb-6'></div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {
                    advertisedProducts.map(product => <AdvertisedProductCard key={product._id} product={product}></AdvertisedProductCard>)
                }
            </div>
        </div>
    );
};

export default AdvertisedProducts;