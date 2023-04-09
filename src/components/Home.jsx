import React from 'react';
import person from "../assets/All Images/P3OLGJ1 copy 1.png"

const Home = () => {
    return (
        <>
            {/* home-top */}
            <div className='flex justify-evenly items-center mx-12'>
                <div>
                    <h1 className='text-4xl mb-8'>Get Your <span className='text-green-400'>Dream Job Now!</span></h1>
                    <p className='ash-p-tag mb-6'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn btn-success">Get Started</button>
                </div>
                <img src={person} alt="person" className='w-[40%] ' />

            </div>

        </>
    );
};

export default Home;