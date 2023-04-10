import React, { useState } from 'react';
import Job from './Job';

const Jobs = ({ jobsData }) => {
    const slicedData = jobsData.slice(0, 4)

    const [initialJobsData, setinitialJobsData] = useState(slicedData)
    const [expand, setExpand] = useState(false)
    const handleSeeAllJobs = (isExpanded) => {
        setinitialJobsData(jobsData)
        setExpand(true)

    }
    console.log(initialJobsData);


    
    return (
        <>
            <div className='grid grid-cols-2 mx-8'>
                {
                    initialJobsData.map(jobData => <Job jobData={jobData} key={jobData.id}></Job>)
                }

            </div>
            {
                !expand && (<span className='flex justify-center'>
                <button className="btn btn-success" onClick={()=>handleSeeAllJobs(true)}>See All Jobs</button>
            </span>)
            }
        </>
    );
};

export default Jobs;