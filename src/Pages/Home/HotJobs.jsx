import React, { use } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({jobsPromise}) => {
    const jobs=use(jobsPromise)
    console.log(jobs)
    return (
        <div>
            <h2 className='text-4xl text-center font bold my-10'> Hot jobs of the day</h2>
            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               {
                jobs.map(job=> <JobCard key={job._id} job={job}></JobCard>)
               }
            </div>
        </div>
    );
};

export default HotJobs;