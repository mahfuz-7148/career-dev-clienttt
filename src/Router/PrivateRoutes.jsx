import React, {use} from 'react';
import {AuthCotext} from '../Contexts/AuthProvider.jsx';
import {Navigate} from 'react-router';

const PrivateRoutes = ({children}) => {
    const {saveUser, loading} = use(AuthCotext)

    if (loading) {
        return <span className="loading loading-ring loading-xl"></span>
    }

    if (! saveUser) {
        return <Navigate to='/login' />
    }

    return children
};

export default PrivateRoutes;