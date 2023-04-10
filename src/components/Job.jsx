import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Job = ({ jobData }) => {
    const { id, logo, jobTitle, companyName, jobType, location, fulltimeOrParttime, salary } = jobData
    return (
        <div className='p-12 rounded border border-slate-300 p-4'>
            <img src={logo} alt="" />
            <h1 className='text-xl font-bold mt-6'>{jobTitle}</h1>
            <h2 className='text-xl font-bold text-gray-400 mt-1'>{companyName}</h2>
            <div className='flex gap-6 mt-4'>
                <button className="btn btn-success btn-outline btn-sm">{jobType}</button>
                <button className="btn btn-success btn-outline btn-sm">{fulltimeOrParttime}</button>
            </div>
            <div className='flex items-center gap-10 my-4'>
                <div className='flex items-center gap-2'>
                    <MapPinIcon className='w-5 h-5 text-gray-500'></MapPinIcon> <p className='ash-p-tag'>{location}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <CurrencyDollarIcon className='w-5 h-5 text-gray-500'></CurrencyDollarIcon><p className='ash-p-tag'>Salary: {salary}</p>
                </div>
            </div>
            <button className='btn btn-success btn-md'>View Details</button>
        </div>
    );
};

export default Job;