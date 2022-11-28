import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import CategorySection from '../CategorySection/CategorySection';
import FeatureSection from '../FeatureSection/FeatureSection';
import HeroBanner from '../HeroBanner/HeroBanner';
import TestimonialSection from '../TestimonialSection/TestimonialSection';

const Home = () => {

    const { isLoading, data: advertisedProducts, refetch } = useQuery({
        queryKey: ['advertisedProducts'],
        queryFn: () =>
            axios.get('http://localhost:5000/products/advertised')
                .then(data => data.data)
    })

    return (
        <div className='flex flex-col gap-20 my-10'>
            <Helmet><title>Home - Cadence</title></Helmet>
            <HeroBanner></HeroBanner>
            <CategorySection></CategorySection>
            {
                !isLoading && advertisedProducts.length > 0 &&
                <AdvertisedProducts advertisedProducts={advertisedProducts} refetch={refetch}></AdvertisedProducts>
            }
            <FeatureSection></FeatureSection>
            <TestimonialSection></TestimonialSection>
        </div>
    );
};

export default Home;