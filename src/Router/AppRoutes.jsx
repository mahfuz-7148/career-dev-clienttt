import React from 'react';
import { Route, Routes } from 'react-router';
import Root from '../Layouts/Root.jsx';
import Home from '../Pages/Home.jsx';
import Login from '../Pages/Login.jsx';
import Register from '../Pages/Register.jsx';
import JobDetails from '../Components/JobDetails.jsx';
import PrivateRoutes from './PrivateRoutes.jsx';
import JobApply from '../Components/JobApply.jsx';
import MyApplications from '../Components/MyApplications.jsx';
import AddJob from '../Components/AddJob.jsx';
import MyPostedJobs from '../Components/MyPostedJobs.jsx';
import ViewApplication from '../Components/ViewApplication.jsx';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Root />}>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/jobs/:id" element={<PrivateRoutes><JobDetails /></PrivateRoutes>} />
                <Route path="/jobApply/:id" element={<PrivateRoutes><JobApply /></PrivateRoutes>} />
                <Route path="/myApplications" element={<PrivateRoutes><MyApplications /></PrivateRoutes>} />
                <Route path="/addJob" element={<PrivateRoutes><AddJob /></PrivateRoutes>} />
                <Route path="/myPostedJobs" element={<PrivateRoutes><MyPostedJobs /></PrivateRoutes>} />
                <Route path="/applications/:id" element={<PrivateRoutes><ViewApplication /></PrivateRoutes>} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;