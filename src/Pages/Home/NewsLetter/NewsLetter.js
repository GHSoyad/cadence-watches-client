import React from 'react';
import newsletter from '../../../Assets/images/newsletter.svg';

const NewsLetter = () => {
    return (
        <section className='container mx-auto max-w-screen-xl px-2 md:px-4 xl:px-0 mt-10'>
            <div className='md:flex items-center justify-center gap-24 mx-auto'>
                <div className='max-w-sm hidden md:block'>
                    <img src={newsletter} alt="" />
                </div>
                <div class="max-w-md mx-auto md:mx-0">
                    <strong class="block text-center text-xl font-medium md:text-2xl">
                        Want us to email you with the latest deals?
                    </strong>
                    <form class="mt-6">
                        <div class="relative max-w-lg">
                            <label class="sr-only" for="email"> Email </label>
                            <input
                                class="w-full rounded-full p-4 pr-32 input input-bordered"
                                id="email"
                                type="email"
                                placeholder="john@doe.com"
                            />
                            <button class="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-base-300 px-5 py-3 text-sm font-medium transition hover:bg-base-200" type="button">
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;