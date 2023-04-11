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
            <div className='flex flex-col lg:flex-row-reverse justify-evenly lg:items-center items-stretch px-12 bg-gray-200'>
                <img src={person} alt="person" className='w-[40%]' />
                <div className=''>
                    <h1 className='text-4xl mb-8'>Get Your <span className='text-green-400'>Dream Job Now!</span></h1>
                    <p className='ash-p-tag mb-6'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn btn-success">Get Started</button>
                </div>

            </div>
            {/* home jobs category */}
            <div>
                <h1 className='text-center font-bold text-4xl mt-6'>Job Category List</h1>
                <p className='text-center text-slate-600'>Explore thousands of job opportunities with all the information you need.</p>
                <div className='grid lg:grid-cols-4 gap-4 mx-8 my-6'>
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
                <h1 className='font-bold text-4xl text-center'>Featured Jobs</h1>
                <p className='font-semibold text-slate-500 text-center'>See our featured job list here. To see details of a specific job post click on View Details</p>
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