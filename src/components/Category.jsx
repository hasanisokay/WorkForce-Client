import React from 'react';

const Category = ({category}) => {

    const {logo, categoryName, numJobsAvailable } = category
    return (
        <div className='bg-gray-200 rounded lg:w-full lg:py-8 lg:px-8'>
            <img src={logo} alt="" className='rounded mt-4 ml-4 lg:mb-12 mb-4 bg-gray-300' />
            <h1 className='text-xl font-bold lg:mb-4 mb-2 ml-4'>{categoryName}</h1>
            <p className='font-semibold text-slate-700 mb-2 ml-4'>{numJobsAvailable}+ Jobs Available</p>
        </div>
    );
};

export default Category;