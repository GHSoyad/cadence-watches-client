import React from 'react';
import { FaFlag, FaMapMarkerAlt } from 'react-icons/fa';
import { RiCheckboxCircleLine } from 'react-icons/ri';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ProductCard = ({ product, setBookProduct, setReportProduct }) => {

    const { image, name, location, resalePrice, originalPrice, yearsUsed, datePosted, sellerName, sellerStatus } = product;

    return (
        <div className="card card-compact shadow-xl transition-opacity bg-base-200">
            <PhotoProvider maskOpacity={0.85}>
                <PhotoView src={image}>
                    <figure><img src={image} alt={name} className='w-full max-h-80 object-cover' /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body font-medium">
                <div className='pb-2'>
                    <div className='flex justify-between items-center gap-2'>
                        <h2 className='text-xl font-medium'>{name}</h2>
                        <label onClick={() => setReportProduct(product)} htmlFor="confirm-modal" title='Report' className='cursor-pointer'><FaFlag></FaFlag></label>
                    </div>
                    <div className='flex'>
                        <span className='text-xs'>{sellerName}</span>
                        {
                            sellerStatus === 'verified' && <RiCheckboxCircleLine className='ml-1 text-blue-500'></RiCheckboxCircleLine>
                        }
                    </div>
                </div>
                <div className='flex justify-between text-base gap-1 flex-wrap'>
                    <p className=''>Resale: $ <span className='text-lg'>{resalePrice}</span></p>
                    <div className='line-through flex items-center'>Original: $ <span className='text-lg'>{originalPrice}</span></div>
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