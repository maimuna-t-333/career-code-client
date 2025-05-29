import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const {_id,title,company}=useLoaderData()
    
    return (
        <div>
            <h1>Job details of :</h1>
            <h2 className='text-3xl text-center '>{title}</h2>
            <p className='text-center'>{company}</p>
            <Link to={`/jobApply/${_id}`}><button className='btn'>Apply now</button></Link>
        </div>
    );
};

export default JobDetails;