import React, { useContext, useEffect, useState } from 'react';
import { getLocalStorage } from '../utilities/getDataFromLocalStorage';
import { ApiContext } from '../App';
import AppliedJob from './AppliedJob';



const AppliedJobs = () => {

    const [filterSelect, setFilterSelect] = useState("")
    useEffect(() => {
    
    }, [filterSelect])

    const jobsData = useContext(ApiContext)
    const savedStorage = getLocalStorage()
    let storedAppliedJobs = []
    if (savedStorage) {
        for (const id of savedStorage) {
            const storedJob = jobsData.find(job => job.id == id)
            storedAppliedJobs.push(storedJob)
        }
    }
    return (
        <div>
            <h1 className='text-center text-4xl font-bold py-12 bg-gray-200'>Applied Jobs</h1>
            <div>
                <select defaultValue={'filter by'} className="select select-bordered w-full max-w-xs">
                    <option disabled>Filter By</option>
                    <option>Reomte</option>
                    <option>Fulltime</option>
                </select>
            </div>
            <div className='mt-12'>
                {storedAppliedJobs.map(job => <AppliedJob job={job} key={job.id}></AppliedJob>)}
            </div>
        </div>
    );
};

export default AppliedJobs;