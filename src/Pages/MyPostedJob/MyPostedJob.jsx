import React, { Suspense } from 'react';
import useAuth from '../../Hooks/useAuth';
import JobLists from './JobLists';
import { jobCreatedByPromise } from '../../api/jobApi';

const MyPostedJob = () => {
    const {user}=useAuth();
    return (
        <div>
            <h2>My posted job:</h2>
            <Suspense>
                <JobLists jobCreatedByPromise={jobCreatedByPromise(user.email)}>

                </JobLists>
            </Suspense>
        </div>
    );
};

export default MyPostedJob;