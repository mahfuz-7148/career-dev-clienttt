import React, {use} from 'react';
import {AuthCotext} from '../Contexts/AuthProvider.jsx';
import {Link, useParams} from 'react-router';
import axios from 'axios';

const JobApply = () => {
    const {id: jobId} = useParams()
    const {saveUser} = use(AuthCotext)

    const formApply = e => {
        e.preventDefault()
        const form = e.target
        const linkedIn = form.linkedIn.value
        const github = form.github.value
        const resume = form.resume.value

        console.log(linkedIn, github, resume)

        const application = {
            jobId,
            applicant: saveUser.email,
            linkedIn,
            github,
            resume
        }

        axios.post(`${import.meta.env.VITE_SERVER}/applications/`, application)
            .then(res => {
                console.log(res.data)

            }
        ).catch(error => {
            console.log(error)

        })

    }

    return (
        <div>
            <h3 className="text-4xl">Apply for this job: <Link to={`/jobs/${jobId}`}>Details</Link></h3>
            <form onSubmit={formApply}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <label className="label">LinkedIn Link</label>
                    <input type="url" name="linkedIn" className="input" placeholder="LinkedIn profile link" />

                    <label className="label">Github Link</label>
                    <input type="url" name="github" className="input" placeholder="Github Link" />

                    <label className="label">Resume Link</label>
                    <input type="url" name="resume" className="input" placeholder="Resume Link" />

                    <input type="submit" className='btn' value="Apply" />

                </fieldset>
            </form>
        </div>
    );
};

export default JobApply;