import React from 'react';

const AdvertisedProductCard = ({ product }) => {

    const { name, image, resalePrice, category, condition, location } = product;

    return (
        <div className="card group card-compact bg-base-200">
            <figure><img src={image} alt={name} className='w-full max-h-72 object-cover group-hover:scale-110 duration-500' /></figure>
            <div className="card-body gap-1">
                <h2 className="card-title">{name}</h2>
                <p className='text-lg'>Price: $ {resalePrice}</p>
                <p>Condition: {condition}</p>
                <div className="card-actions mt-2">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{location}</div>
                </div>
            </div>
            <button className='btn bg-base-300 rounded-t-none border-0 hover:glass'>View Details</button>
        </div>
    );
};

export default AdvertisedProductCard;