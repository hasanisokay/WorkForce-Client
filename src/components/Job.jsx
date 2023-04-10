import React from 'react';

const Job = ({jobData}) => {
    const {id, logo, jobTitle, companyName, jobType, location, fulltimeOrParttime, salary } = jobData
    return (
        <div className='m-6'>
            <img src={logo} alt="" />
            <h1>{jobTitle}</h1>
            <h2>{companyName}</h2>
            <div className=""><button>{jobType}</button>
            <button>{fulltimeOrParttime}</button></div>
        </div>
    );
};

export default Job;