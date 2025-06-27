import React, {Suspense} from 'react';
import Banner from '../Components/Banner.jsx';
import HotJobs from '../Components/HotJobs.jsx';
import axios from 'axios';

const jobsPromise = axios.get(`${import.meta.env.VITE_SERVER}/jobs`)
    .then(res => res.data)
const Home = () => {
    return (
        <div>
           <Banner />
            <Suspense fallback={'loadingg..'}>
                <HotJobs jobsPromise={jobsPromise}/>
            </Suspense>
        </div>
    );
};

export default Home;