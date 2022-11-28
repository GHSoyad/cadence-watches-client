import React from 'react';
import { FaComment, FaEye, FaUser } from 'react-icons/fa';
import react from '../../Assets/images/react-js.png';
import proto from '../../Assets/images/prototypical-inheritance.png';
import unit from '../../Assets/images/unit-test.png';
import rav from '../../Assets/images/react-angular-vue.jpeg';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
    return (
        <div className='container mx-auto max-w-screen-xl px-2 md:px-4 xl:px-0 mt-10'>
            <Helmet><title>Blogs - Cadence</title></Helmet>
            <h1 className='text-center text-2xl font-bold'>Blogs</h1>
            <div className='divider bg-neutral-content h-0.5 opacity-50 mt-2 mb-6'></div>
            <div className='grid md:grid-cols-2 gap-5 lg:gap-8 cursor-default'>
                <div className='flex flex-col gap-4 bg-base-200 p-4 lg:p-8 rounded-xl justify-between'>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <h3 className='text-xl font-bold'>What are the different ways to manage a state in a React application?</h3>
                            <div className='flex gap-2 items-center text-sm'>
                                <FaUser className='text-base'></FaUser>
                                <p className='font-medium pt-2'>Golam Hasnain Soyad</p>
                            </div>
                        </div>
                        <img src={react} alt="" className='rounded w-full object-cover max-h-60' />
                        <p className='text-justify'>
                            We can use "useState" to manage the local state in react component. It updates the local component only. Another way to manage state is "lifting the state up" to parent component to manage the state among sibling components. We can also manage state within components children by "prop drilling" where we can pass state as props to child components. To manage a state globally we can use "useContext" hook, with this hook we can manage the state from anywhere with the help of context provider.
                        </p>
                    </div>
                    <div className='flex items-center gap-10 font-medium'>
                        <div className='flex gap-3 items-center'>
                            <FaEye className='text-lg'></FaEye>
                            <p>53</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <FaComment className='text-base'></FaComment>
                            <p>34</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4 bg-base-200 p-4 lg:p-8 rounded-xl justify-between'>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <h3 className='text-xl font-bold'>What is a unit test? Why should we write unit tests?</h3>
                            <div className='flex gap-2 items-center text-sm'>
                                <FaUser className='text-base'></FaUser>
                                <p className='font-medium pt-2'>Golam Hasnain Soyad</p>
                            </div>
                        </div>
                        <img src={unit} alt="" className='rounded w-full object-cover max-h-60' />
                        <p className='text-justify'>
                            A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. A unit can be anything a line of code, a method, or a class. The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages. The earlier a problem is identified, the fewer compound errors occur. Costs of fixing a problem early can quickly outweigh the cost of fixing it later. It is easier to debug and changes to the code base can be made quickly.
                        </p>
                    </div>
                    <div className='flex items-center gap-10 font-medium'>
                        <div className='flex gap-3 items-center'>
                            <FaEye className='text-lg'></FaEye>
                            <p>48</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <FaComment className='text-base'></FaComment>
                            <p>34</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4 bg-base-200 p-4 lg:p-8 rounded-xl justify-between'>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <h3 className='text-xl font-bold'>How does prototypical inheritance work?</h3>
                            <div className='flex gap-2 items-center text-sm'>
                                <FaUser className='text-base'></FaUser>
                                <p className='font-medium pt-2'>Golam Hasnain Soyad</p>
                            </div>
                        </div>
                        <img src={proto} alt="" className='rounded w-full object-cover max-h-60' />
                        <p className='text-justify'>
                            Every object with its methods and properties contains an internal and hidden property known as "Prototype". It is either null or references another object. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. In modern language, we can use __proto__ to set the "Prototype" of an object.
                        </p>
                    </div>
                    <div className='flex items-center gap-10 font-medium'>
                        <div className='flex gap-3 items-center'>
                            <FaEye className='text-lg'></FaEye>
                            <p>24</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <FaComment className='text-base'></FaComment>
                            <p>13</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4 bg-base-200 p-4 lg:p-8 rounded-xl justify-between'>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <h3 className='text-xl font-bold'>React vs. Angular vs. Vue?</h3>
                            <div className='flex gap-2 items-center text-sm'>
                                <FaUser className='text-base'></FaUser>
                                <p className='font-medium pt-2'>Golam Hasnain Soyad</p>
                            </div>
                        </div>
                        <img src={rav} alt="" className='rounded w-full object-cover max-h-60' />
                        <p className='text-justify'>
                            Angular is a front-end framework with lots of components, services, and tools. It is defined as “The modern web developer's platform”. It is developed and maintained by Google developers.<br></br>
                            React is considered a UI library. It is defined as “A JavaScript library for building user interfaces”. Facebook developers are behind the development and maintenance of this library.<br></br>
                            Last but not least, Vue.js is, defined as “A progressive JavaScript framework”. Vue.js is developed and led by Evan You, but also it counts on a huge open-source community.
                        </p>
                    </div>
                    <div className='flex items-center gap-10 font-medium'>
                        <div className='flex gap-3 items-center'>
                            <FaEye className='text-lg'></FaEye>
                            <p>37</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <FaComment className='text-base'></FaComment>
                            <p>17</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;