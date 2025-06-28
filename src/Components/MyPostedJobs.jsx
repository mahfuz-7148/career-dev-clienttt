import React, {Suspense, use} from 'react';
import {AuthCotext} from '../Contexts/AuthProvider.jsx';
import axios from 'axios';
import JobLists from './JobLists.jsx';


const jobsPromise = email => {
    return axios.get(`http://localhost:3000/jobs/applications?email=${email}`)
        .then(res => res.data)
}

const MyPostedJobs = () => {
    const {saveUser} = use(AuthCotext)
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