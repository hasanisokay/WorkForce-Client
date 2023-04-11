import React, { useContext, useEffect, useState } from 'react';
import person from "../assets/All Images/P3OLGJ1 copy 1.png"
import Category from './Category';
import Jobs from './Jobs';
import { ApiContext } from '../App';

const Home = () => {
    const [categories,setCategory] = useState([])
    useEffect(()=>{
        fetch("/categories.json") .then(res=>res.json()) .then(data=>setCategory(data))
    },[])
    const jobsData = useContext(ApiContext)
    return (
        <>
            {/* home-top */}
            <div className='flex flex-col lg:flex-row-reverse lg:justify-evenly lg:items-center lg:px-4 bg-gray-200'>
                <img src={person} alt="person" className='lg:w-[40%] lg:h-72 w-40 h-32 mx-auto' />
                <div className='overflow-hidden'>
                    <h1 className='text-4xl mb-8'>Get Your <span className='text-green-400 mx-2'>Dream Job Now!</span></h1>
                    <p className='ash-p-tag mb-6 mx-2'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn btn-success mb-4 mx-2">Get Started</button>
                </div>

            </div>
            {/* home jobs category */}
            <div className=''>
                <h1 className='text-center font-bold lg:w-full lg:text-4xl text-xl mt-2 lg:mt-6'>Job Category List</h1>
                <p className='lg:text-center text-slate-600 lg:w-full'>Explore thousands of job opportunities with all the information you need.</p>
                <div className='grid lg:grid-cols-4 lg:gap-4 gap-2 mt-4 mb-4 lg:mx-8 lg:my-6'>
                {
                    categories.map( category=> 
                    <Category 
                        key={category.id} 
                        category= {category} 
                        ></Category> )
                }
                </div>
            </div>
            {/* featured jobs */}
            <div>
                <h1 className='font-bold lg:text-4xl text-xl text-center'>Featured Jobs</h1>
                <p className='font-semibold text-slate-500 mb-4 text-center'>See our featured job list here. To see details of a specific job post click on View Details</p>
            </div>

            <div>
                {
                    <Jobs jobsData={jobsData} ></Jobs>
                }
            </div>

        </>
    );
};

export default Home;