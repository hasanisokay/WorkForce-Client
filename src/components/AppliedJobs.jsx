import React, { useContext, useState } from 'react';
import { getLocalStorage } from '../utilities/getDataFromLocalStorage';
import { ApiContext } from '../App';
import AppliedJob from './AppliedJob';



const AppliedJobs = () => {
    const jobsData = useContext(ApiContext)
    const savedStorage = getLocalStorage()
    let storedAppliedJobs = []
    if (savedStorage) {
        for (const id of savedStorage) {
            const storedJob = jobsData.find(job => job.id == id)
            storedAppliedJobs.push(storedJob)
        }
    }

    const [filter, setFilter] = useState("")

    const filterHandler = ()=>{
        const selectedFilter = document.getElementById("select").value
        setFilter(selectedFilter)
    }
    if(filter==="f"){
    }
    else if(filter ==="onsite"){
       const filteredStoredData = storedAppliedJobs.filter(job=>job.jobType ==='Onsite')
       storedAppliedJobs = filteredStoredData
    }
    else if(filter ==="remote"){
        const filteredStoredData = storedAppliedJobs.filter(job=>job.jobType ==='Remote')
        storedAppliedJobs = filteredStoredData
     }

    return (
        <div>
            <h1 className='text-center text-4xl font-bold lg:py-12 lg:bg-gray-200'>Applied Jobs</h1>
            <div className='mt-4 lg:flex lg:justify-end lg:mr-8'> 
                <select id='select' className="select bg-slate-100 select-bordered lg:w-full max-w-xs" onChange={()=>filterHandler()}>
                    <option value={"f"}>Filter By</option>
                    <option value={"remote"}>Reomte</option>
                    <option value={"onsite"}>Onsite</option>
                </select>
            </div>
            <div className='lg:mb-12 mt-4'>
                {storedAppliedJobs.map(job => <AppliedJob job={job} key={job.id}></AppliedJob>)}
            </div>
        </div>
    );
};

export default AppliedJobs;