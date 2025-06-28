import React from 'react';
import { Link, useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchJobDetails = async (id) => {
    const res = await axios.get(`http://localhost:3000/jobs/${id}`);
    return res.data;
};

const JobDetails = () => {
    const { id } = useParams();
    const { data: job } = useQuery({
        queryKey: ['job', id],
        queryFn: () => fetchJobDetails(id),
    });

    const { _id, title, company } = job || {};

    return (
        <div>
            <h2 className="text-6xl"> Job details of: {title}</h2>
            <p className="text-3xl">Company: {company}</p>
            <Link to={`/jobApply/${_id}`}>
                <button className='btn btn-primary'>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;