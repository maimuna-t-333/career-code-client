import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import useAuth from '../../Hooks/useAuth';
import { myApplicationsPromise } from '../../api/applicationApi';



const MyApplications = () => {
    const { user } = useAuth()

    console.log('token access token', user.accessToken)
    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={'loading your application'}>
                <ApplicationList
                myApplicationsPromise={myApplicationsPromise(user.email,user.accessToken)}
               
                ></ApplicationList>
            </Suspense>
            

        </div>
    );
};

export default MyApplications;