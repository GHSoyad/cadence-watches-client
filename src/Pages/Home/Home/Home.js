import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import CategorySection from '../CategorySection/CategorySection';

const Home = () => {

    const { isLoading, data: advertisedProducts } = useQuery({
        queryKey: ['advertisedProducts'],
        queryFn: () =>
            axios.get('http://localhost:5000/products/advertised')
                .then(data => data.data)
    })

    return (
        <div className='container mx-auto max-w-screen-xl px-2 md:px-4 xl:px-0 flex flex-col gap-20 my-10'>
            <CategorySection></CategorySection>
            {
                !isLoading && advertisedProducts &&
                <AdvertisedProducts advertisedProducts={advertisedProducts}></AdvertisedProducts>
            }
        </div>
    );
};

export default Home;