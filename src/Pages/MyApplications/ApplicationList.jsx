import React, { use } from 'react';
import JobApplicationRow from './JobApplicationRow';

const ApplicationList = ({ myApplicationsPromise }) => {
    const applications = use(myApplicationsPromise)
    console.log(applications)
    return (
        <div>
            <h2 className='text-3xl text-center my-10'>Jobs applied so far:{applications.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    #
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            applications.map((application,index)=> <JobApplicationRow
                            key={application._id}
                            index={index}
                            application={application}
                            ></JobApplicationRow> )
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ApplicationList;