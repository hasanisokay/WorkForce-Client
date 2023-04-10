import React from 'react';

const Category = ({category}) => {

    const {logo, categoryName, numJobsAvailable } = category
    return (
        <div className='bg-gray-200 rounded py-8 px-8'>
            <img src={logo} alt="" className='rounded mb-12 bg-gray-300' />
            <h1 className='text-xl font-bold mb-4'>{categoryName}</h1>
            <p className='font-semibold text-slate-700'>{numJobsAvailable}+ Jobs Available</p>
        </div>
    );
};

export default Category;