import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ProductCard = ({ product, setBookProduct }) => {

    const { image, name, location, resalePrice, originalPrice, yearsUsed, datePosted, sellerName } = product;

    return (
        <div className="card card-compact shadow-xl transition-opacity bg-base-200">
            <figure><img src={image} alt={name} className='w-full max-h-80 object-cover' /></figure>
            <div className="card-body font-medium">
                <div className='pb-2'>
                    <h2 className='text-xl font-medium'>{name}</h2>
                    <p className='text-xs'>{sellerName}</p>
                </div>
                <div className='flex justify-between text-base gap-1 flex-wrap'>
                    <p className=''>Resale: $ <span className='text-lg'>{resalePrice}</span></p>
                    <p className='line-through text-end'>Original: $ <span className='text-lg'>{originalPrice}</span></p>
                </div>
                <div className='flex justify-between gap-1 flex-wrap'>
                    <p className='text-base'>Years Used: {yearsUsed}</p>
                    <div className='flex items-center'>
                        <FaMapMarkerAlt className='pb-1 text-lg'></FaMapMarkerAlt>
                        <p className='text-base'>{location}</p>
                    </div>
                </div>

                {/* The button to open modal */}
                <label onClick={() => setBookProduct(product)} htmlFor="booking-modal" className="btn bg-base-300 hover:glass my-3">Book Now</label>
                <p className='text-xs flex items-end'>Posted: {datePosted}</p>
            </div>
        </div>
    );
};

export default ProductCard;