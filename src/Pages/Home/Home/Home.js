import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import CategorySection from '../CategorySection/CategorySection';
import HeroBanner from '../HeroBanner/HeroBanner';

const Home = () => {

    const { isLoading, data: advertisedProducts, refetch } = useQuery({
        queryKey: ['advertisedProducts'],
        queryFn: () =>
            axios.get('http://localhost:5000/products/advertised')
                .then(data => data.data)
    })

    return (
        <div className='flex flex-col gap-20 my-10'>
            <HeroBanner></HeroBanner>
            <CategorySection></CategorySection>
            {
                !isLoading && advertisedProducts.length > 0 &&
                <AdvertisedProducts advertisedProducts={advertisedProducts} refetch={refetch}></AdvertisedProducts>
            }
        </div>
    );
};

export default Home;