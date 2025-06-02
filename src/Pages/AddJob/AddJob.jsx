import React from 'react';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJob = () => {
    const { user } = useAuth()
    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
        // console.log(data)

        //process salaryRange
        const { min, max, currency, ...newJob } = data;
        newJob.salaryRange = { min, max, currency }

        //process requirements
        const requirementsString = newJob.requirements;
        const requirementsDirty = requirementsString.split(',');
        const requirementsClean = requirementsDirty.map(req => req.trim())
        newJob.requirements = requirementsClean;

        //process responsibilities

        newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim())
        newJob.status = 'active'
        console.log(newJob)

        //save job to the database
        axios.post('http://localhost:3000/jobs', newJob)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <h2>Add job here</h2>
            <form onSubmit={handleAddJob}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                    <label className="label">Job Title</label>
                    <input type="text" name='title' className="input" placeholder="title" />

                    <label className="label">Company</label>
                    <input type="text" name='comapny' className="input" placeholder="Comapny name" />

                    <label className="label">Location</label>
                    <input type="text" name='location' className="input" placeholder="Comapny Location" />

                    <label className="label">Logo</label>
                    <input type="text" name='logo' className="input" placeholder="Comapny logo url" />


                </fieldset>

                {/* Job Type */}

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job Type</legend>
                    <div className="filter">
                        <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                        <input className="btn" type="radio" name="jobType" value='on-site' aria-label="On-site" />
                        <input className="btn" type="radio" name="jobType" value='remote' aria-label="Remote" />
                        <input className="btn" type="radio" name="jobType" value='Hybrid' aria-label="Hybrid" />
                    </div>

                </fieldset>
                {/* Job Category */}

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job Category</legend>
                    <select defaultValue="Job Category" name='category' className="select">
                        <option disabled={true}>Job Category</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                    </select>

                </fieldset>
                {/* deadline */}

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Application deadline</legend>
                    <input type="date" name='deadLine' className="input" />
                </fieldset>
                {/* salary */}

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>
                    <div className='grid grid-cols-1 grid-cols-3'>

                        <div>
                            <label className="label">Min Salary</label>
                            <input type="text" className="input" placeholder="Minimum Salary" name='min' />
                        </div>

                        <div>
                            <label className="label">Max Salary</label>
                            <input type="text" className="input" placeholder="Maximum Salary" name='max' />
                        </div>

                        <div>
                            <label className="label">Currency</label>
                            <select defaultValue="Select a currency" name='currency' className="select">
                                <option disabled={true}>Select a  currency</option>
                                <option>BDT</option>
                                <option>RUPI</option>
                                <option>DOLLAR</option>
                            </select>
                        </div>
                    </div>
                </fieldset>
                {/* description */}

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job description</legend>
                    <textarea className="textarea" name='description' placeholder="Job description"></textarea>

                </fieldset>
                {/* requirements */}

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job requirements</legend>
                    <textarea className="textarea" name='requirements' placeholder="Job requirements(seperate by comma) "></textarea>
                </fieldset>
                {/* responsibilities */}

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job responsibilities</legend>
                    <textarea className="textarea" name='responsibilities' placeholder="Job responsibilities(seperate by comma) "></textarea>
                </fieldset>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">HR Info</legend>

                    <label className="label">HR name</label>
                    <input type="text" name='hr_name' className="input" placeholder="hr_name" />

                    <label className="label">HR Email</label>
                    <input type="email" name='hr_email' className="input" placeholder="hr_email" defaultValue={user.email} />



                </fieldset>
                <input type="submit" value="Add Job" className='btn' />

            </form>
        </div>
    );
};

export default AddJob;