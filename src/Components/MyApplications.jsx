import React, {Suspense, use} from 'react';
import {AuthCotext} from '../Contexts/AuthProvider.jsx';
import ApplicationStats from './ApplicationStats.jsx';
import ApplicationList from './ApplicationList.jsx';
import axios from 'axios';

const applicationPromise = email => {
    return axios.get(`${import.meta.env.VITE_SERVER}/applications?email=${email}`)
        .then(res => res.data)

}

const MyApplications = () => {
    const {saveUser} = use(AuthCotext)
    return (
        <div>
            <ApplicationStats />

            <Suspense fallback={'loadinggggggg...'}>
                <ApplicationList applicationPromise={applicationPromise(saveUser?.email)}/>
            </Suspense>

        </div>
    );
};

export default MyApplications;