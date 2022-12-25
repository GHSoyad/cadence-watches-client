import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './TestimonialSection.css';

const TestimonialSection = () => {

    const testimonials = [
        { id: 1, name: "Sophie Lennon", profession: "Receptionist at Office", review: "Items are received. All in the good condition. The watch come with the box and bubble wrap. So far no scratch on two watches. Thanks seller.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" },
        { id: 2, name: "Sharon Ehman", profession: "Digital Marketing at Studio", review: "Delivery was fast, shipped out a day after purchase. Took 2 days to arrived. Packaging was neat and secured. The band is in good condition & functioning well by far.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" },
        { id: 3, name: "Chris Paul", profession: "Administrative Assistant at Center", review: "Love everything about this watch. After use a few weeks strap still look new. Won't easily to get dirt. Very nice color. Worth buying. Tq seller.", img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" },
        { id: 4, name: "Sharon Ehman", profession: "Digital Marketing at Studio", review: "Delivery was fast, shipped out a day after purchase. Took 2 days to arrived. Packaging was neat and secured. The band is in good condition & functioning well by far.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" }
    ]

    return (
        <section className='container mx-auto max-w-screen-xl px-2 md:px-4 xl:px-0 '>
            <div>
                <h2 className="text-2xl font-bold">Customers Reviews</h2>
                <div className='divider bg-neutral-content h-0.5 opacity-50 mt-2 mb-6'></div>

                <div className="mt-12">
                    <Swiper modules={[Navigation, Pagination, A11y, Autoplay, EffectCoverflow]}
                        spaceBetween={40}
                        slidesPerView={3}
                        loop
                        navigation
                        autoplay={{ delay: 2000, disableOnInteraction: true }}
                        pagination={{ clickable: true }}
                        effect='coverflow'
                        breakpoints={{
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 40
                            },
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            200: {
                                slidesPerView: 1
                            }
                        }}
                    >
                        {
                            testimonials.map(testimonial => {
                                return <SwiperSlide key={testimonial.id}>
                                    {({ isNext }) => (
                                        <div className={isNext ? 'scale-100' : 'scale-100 bg-black'}>
                                            <img alt={testimonial.name} src={testimonial.img} className="mx-auto h-14 w-14 rounded-full object-cover" />
                                            <blockquote className="flex flex-col justify-between rounded-lg p-6 text-center">
                                                <p className="text-lg font-bold">{testimonial.name}</p>
                                                <p className="mt-1 text-xs font-medium">{testimonial.profession}</p>
                                                <p className="mt-4 text-sm">{testimonial.review}</p>
                                                <div className="mt-6 flex justify-center gap-1 text-amber-300 text-lg">
                                                    <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
                                                </div>
                                            </blockquote>
                                        </div>
                                    )
                                    }
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;