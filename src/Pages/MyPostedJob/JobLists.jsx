import React, { use } from 'react';
import { Link } from 'react-router';

const JobLists = ({ jobCreatedByPromise }) => {
    const jobs = use(jobCreatedByPromise)
    return (
        <div>
            <h2 className='text-4xl text-center my-10'>Job Created by you: {jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Deadline</th>
                            <th>Count</th>
                            <th>View Application</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            jobs.map((job,index)=> <tr key={job._id}>
                            <th>{index+1}</th>
                            <td>{job.title}</td>
                            
                            <td>{job.deadLine}</td>
                            <td>{job.application_ount}</td>
                            <td><Link to={`/application/${job._id}`}>View Application</Link></td>
                        </tr>
)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobLists;