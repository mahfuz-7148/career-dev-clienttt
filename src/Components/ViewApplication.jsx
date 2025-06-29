import axios from 'axios';
import {useParams} from 'react-router';
import {useQuery} from '@tanstack/react-query';


const applicationDetails = async id => {
    const response = await axios.get(`https://career-dev-clienttt.vercel.app/applications/job/${id}`)
    return response.data
}

const ViewApplication = () => {

    const {id} = useParams()
    const {data: jobId} = useQuery({
        queryKey: ['jobId', id],
        queryFn: () => applicationDetails(id)
    })
    console.log(jobId)
    const statusChange = (e, app_id) => {
        console.log(e.target.value, app_id)

        axios.patch(`https://career-dev-clienttt.vercel.app/applications/${app_id}`, {
            status: e.target.value
        })
            .then(res => res.data)
            .catch(error => console.log(error)
            )

    }


    return (
        <div>
            <h2 className="text-4xl">job view applications {jobId?.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        jobId?.map(application =>
                            <tr key={application._id}>
                                <th>1</th>
                                <td>{application.applicant}</td>
                                <td>Quality Control</td>
                                <td>
                                    <select onChange={e => statusChange(e, application._id)} defaultValue={application.status}>
                                        <option disabled={true}>Update Status</option>
                                        <option>Pending</option>
                                        <option>Interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplication;