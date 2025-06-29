import React, {Suspense, use} from 'react';
import {AuthCotext} from '../Contexts/AuthProvider.jsx';
import ApplicationStats from './ApplicationStats.jsx';
import ApplicationList from './ApplicationList.jsx';
import useAxiosSecure from '../Hooks/useAxiosSecure.jsx';

const MyApplications = () => {
    const axiosSecure = useAxiosSecure()
    const applicationPromise = email => {
        return axiosSecure.get(`/applications?email=${email}`).then(res => res.data)
    }

    const {saveUser} = use(AuthCotext)
    // console.log(saveUser.accessToken)
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