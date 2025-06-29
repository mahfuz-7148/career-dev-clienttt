import React, {Suspense, use} from 'react';
import {AuthCotext} from '../Contexts/AuthProvider.jsx';
import JobLists from './JobLists.jsx';
import useAxiosSecure from '../Hooks/useAxiosSecure.jsx';

const MyPostedJobs = () => {
    const {saveUser} = use(AuthCotext)
    const axiosSecure = useAxiosSecure()
    const jobsPromise = email => {
        return axiosSecure.get(`/jobs/applications?email=${email}`).then(res => res.data)
    }
    return (
        <div>
            <h2>My posted Jobs: </h2>
            <Suspense>
                <JobLists jobsPromise={jobsPromise(saveUser.email)}/>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;