import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ApiContext } from '../App';
import { CalendarDaysIcon, CurrencyDollarIcon, EnvelopeIcon, PhoneArrowUpRightIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { saveToLocal } from '../utilities/saveToLocalStorage';

const JobDetails = () => {
    const { id } = useParams()
    const jobsData = useContext(ApiContext)
    const jobClicked = jobsData.find(job => job.id == id)
    const { jobResponsibility, educationalRequirements, jobDescription, experiences, jobTitle, companyName, location, contactInformation, salary } = jobClicked
    const handleApplyNow = ()=>{
        saveToLocal(jobClicked.id)
    }
    return (
        <div>
            <h1 className='font-bold lg:text-4xl font-xl text-center lg:p-12 p-2 bg-gray-200 lg:mb-12 mb-6'> Job Details</h1>
            <div className='grid lg:grid-cols-3 gap-2 lg:mx-4'>
                <div className='lg:col-span-2 lg:p-8 ml-4'>
                    <h1 className='mb-4'> <span className='font-semibold text-lg'>Job Description: </span> <span className='ash-p-tag'>{jobDescription}</span> </h1>
                    <h1 className='mb-4'> <span className='font-semibold text-lg'>Job Responsibility: </span> <span className='ash-p-tag'>{jobResponsibility}</span> </h1>
                    <h1 className='mb-4'> <span className='font-semibold text-lg'>Educational Requirements: </span> <br /> <span className='ash-p-tag'>{educationalRequirements}</span> </h1>
                    <h1 className='mb-4'> <span className='font-semibold text-lg'>Experiences: </span> <br /> <span className='ash-p-tag'>{experiences}</span> </h1>
                </div>
                <div className='overflow-hidden'>
                    <div className='bg-gray-200 lg:p-8 overflow-hidden mb-4 rounded'>
                        <h1 className='font-bold text-xl ml-2 my-6'>Job Details</h1>
                        <hr className=' w-[90%] h-px m-auto border-gray-400' />
                        <div className='flex items-center gap-2 my-2'><CurrencyDollarIcon className='w-5 h-5'></CurrencyDollarIcon> <span className='text-lg font-semibold'>Sallary: </span>{salary} (Per Month)</div>
                        <div className='flex items-center gap-2'><CalendarDaysIcon className='w-5 h-5'></CalendarDaysIcon> <span className='text-lg font-semibold'>Job Title:</span> {jobTitle}</div>
                        <h1 className='font-bold text-xl my-6'>Contact Information</h1>
                        <hr className=' w-[90%] h-px m-auto border-gray-400' />
                        <div className='flex items-center gap-2 my-2'> <PhoneIcon className='w-5 h-5'></PhoneIcon> <span className='text-lg font-semibold'>Phone:</span>{contactInformation["phone"]} </div>
                        <div className='flex items-center gap-2'> <EnvelopeIcon className='w-5 h-5'></EnvelopeIcon> <span className='text-lg font-semibold'>Phone</span> {contactInformation["email"]} </div>
                    </div>
                    <button className='btn btn-success lg:w-full' onClick={()=>handleApplyNow()}>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;