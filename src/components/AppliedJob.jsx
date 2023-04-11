import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJob = ({ job }) => {

    const { id, logo, jobTitle, companyName, jobType, location, fulltimeOrParttime, salary } = job
    return (
        <div className='rounded border mx-8 my-4 p-4 border-slate-300 flex items-center justify-between'>
            <div className='flex items-center gap-6'>
                <div className=' bg-slate-300  w-56 h-56 flex items-center p-2 rounded'><img src={logo} alt="" className='w-full' /></div>
                <div>
                    <h1 className='text-xl font-bold mt-6'>{jobTitle}</h1>
                    <h2 className='text-xl font-bold text-gray-400 mt-1'>{companyName}</h2>
                    <div className=' mt-4 mb-2 flex gap-6'>
                        <button className="btn btn-success btn-outline btn-sm">{jobType}</button>
                        <button className="btn btn-success btn-outline btn-sm">{fulltimeOrParttime}</button>
                    </div>
                    <div className='flex gap-8'>
                        <div className='flex items-center gap-2'>
                            <MapPinIcon className='w-5 h-5 text-gray-500'></MapPinIcon> <p className='ash-p-tag'>{location}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CurrencyDollarIcon className='w-5 h-5 text-gray-500'></CurrencyDollarIcon><p className='ash-p-tag'>Salary: {salary}</p>
                        </div>
                    </div>
                </div>
            </div>



            <Link to={`../job/${id}`}><button className='btn btn-success btn-md'>View Details</button></Link>
        </div>
    );
};

export default AppliedJob;