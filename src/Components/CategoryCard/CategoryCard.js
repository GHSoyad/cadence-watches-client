import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const CategoryCard = ({ category }) => {

    const { name, image } = category;

    return (
        <div className="card card-compact hover:glass transition-opacity bg-base-200">
            <figure><img src={image} alt="car!" /></figure>
            <div className="card-body flex">
                <div className='flex justify-center items-center gap-2 text-center'>
                    <h2 className="text-xl font-bold">{name}</h2>
                    <FaAngleRight className='text-lg'></FaAngleRight>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;