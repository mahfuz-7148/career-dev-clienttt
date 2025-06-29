import React, {Suspense, use} from 'react';
import {AuthCotext} from '../Contexts/AuthProvider.jsx';
import ApplicationStats from './ApplicationStats.jsx';
import ApplicationList from './ApplicationList.jsx';
import axios from 'axios';

const applicationPromise = (email, accessToken) => {
    return axios.get(`https://career-dev-server.vercel.app/applications?email=${email}`, {
        withCredentials: true,
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    }).then(res => res.data)
}

const MyApplications = () => {

    const {saveUser} = use(AuthCotext)
    console.log(saveUser.accessToken)
    return (
        <div>
            <ApplicationStats />

            <Suspense fallback={'loadinggggggg...'}>
                <ApplicationList applicationPromise={applicationPromise(saveUser?.email, saveUser?.accessToken)}/>
            </Suspense>

        </div>
    );
};

export default MyApplications;