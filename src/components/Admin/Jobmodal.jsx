import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill"; // Assuming ReactQuill is installed
import "react-quill/dist/quill.snow.css";

const JobUpdateModal = ({ jobId, showModal, handleCloseModal }) => {
    const [formData, setFormData] = useState({
        title: "",
        postingDate: "",
        expireDate: "",
        jobType: "",
        description: "",
        qualification: "",
        skills: "",
        experience: "",
        languageRequire: "",
        location: "",
    });

    useEffect(() => {
        if (showModal && jobId) {
            axios.get(`https://kbk-broadcasting-backend.vercel.app/get-job/${jobId}`)
                .then((response) => {
                    const job = response.data;
                    setFormData({
                        title: job.title,
                        postingDate: job.postingDate,
                        expireDate: job.expireDate,
                        jobType: job.jobType,
                        description: job.description || "",
                        qualification: job.qualification,
                        skills: job.skills.join(", "),
                        experience: job.experience,
                        languageRequire: job.languageRequire.join(", "),
                        location: job.location,
                    });
                })
                .catch((error) => console.error("Error fetching job data:", error));
        }
    }, [showModal, jobId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleQuillChange = (value) => {
        setFormData({ ...formData, description: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://kbk-broadcasting-backend.vercel.app/update-job/${jobId}`, formData)
            .then(() => {
                handleCloseModal();
                alert("Job Updated Successfully");
            })
            .catch((error) => {
                console.error("Error updating job:", error);
            });
    };

    return (
        // <div className={`fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50 ${showModal ? '' : 'hidden'}`}>
        //     <div className="bg-white rounded-lg shadow-lg w-3/4 max-w-4xl p-6">
        //         <div className="flex justify-between items-center border-b pb-4 mb-4">
        //             <h2 className="text-xl font-bold">Update Job</h2>
        //             <button className="text-gray-500 hover:text-gray-700" onClick={handleCloseModal}>✖</button>
        //         </div>
        //         <form onSubmit={handleSubmit} className="space-y-4">
        //             <input type="text" name="title" value={formData.title} onChange={handleInputChange} className="w-full p-3 border rounded" placeholder="Job Title" required />
        //             <div className="grid grid-cols-2 gap-4">
        //                 <input type="date" name="postingDate" value={formData.postingDate} onChange={handleInputChange} className="w-full p-3 border rounded" required />
        //                 <select name="jobType" value={formData.jobType} onChange={handleInputChange} className="w-full p-3 border rounded" required>
        //                     <option value="">Select Job Type</option>
        //                     <option value="Full-time">Full-time</option>
        //                     <option value="Part-time">Part-time</option>
        //                 </select>
        //             </div>
        //             <ReactQuill theme="snow" value={formData.description} onChange={handleQuillChange} className="border rounded" />
        //             <input type="text" name="qualification" value={formData.qualification} onChange={handleInputChange} className="w-full p-3 border rounded" placeholder="Qualification" required />
        //             <input type="text" name="skills" value={formData.skills} onChange={handleInputChange} className="w-full p-3 border rounded" placeholder="Skills (comma separated)" />
        //             <div className="grid grid-cols-2 gap-4">
        //                 <input type="text" name="experience" value={formData.experience} onChange={handleInputChange} className="w-full p-3 border rounded" placeholder="Experience" />
        //                 <input type="text" name="languageRequire" value={formData.languageRequire} onChange={handleInputChange} className="w-full p-3 border rounded" placeholder="Languages (comma separated)" required />
        //             </div>
        //             <input type="text" name="location" value={formData.location} onChange={handleInputChange} className="w-full p-3 border rounded" placeholder="Location" required />
        //             <div className="flex justify-end gap-4 mt-4">
        //                 <button type="button" className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" onClick={handleCloseModal}>Close</button>
        //                 <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Update Job</button>
        //             </div>
        //         </form>
        //     </div>
        // </div>








        <>

            <div className={`z-30 fixed inset-0 flex items-center justify-center bg-transperent bg-opacity-50 ${showModal ? '' : 'hidden'}`}>

                <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6">
                    {/* Modal Header */}
                    <div className="flex justify-between items-center border-b pb-4">
                        <h2 className="text-2xl font-semibold text-gray-800">Update Job</h2>
                        <button className="text-gray-500 hover:text-gray-700 text-lg cursor-pointer" onClick={handleCloseModal}>✖</button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        {/* Job Title */}
                        <div>
                            <label className="font-semibold text-gray-700">Job Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0"
                                placeholder="Enter job title"
                                required
                            />
                        </div>

                        {/* Posting Date & Job Type */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="font-semibold text-gray-700">Posting Date</label>
                                <input
                                    type="date"
                                    name="postingDate"
                                    value={formData.postingDate}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0"
                                    required
                                />
                            </div>
                            <div>
                                <label className="font-semibold text-gray-700">Job Type</label>
                                <select
                                    name="jobType"
                                    value={formData.jobType}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0"
                                    required
                                >
                                    <option value="">Select Job Type</option>
                                    <option value="Full-time">Full-time</option>
                                    <option value="Part-time">Part-time</option>
                                </select>
                            </div>
                        </div>

                        {/* Job Description */}
                        <div>
                            <label className="font-semibold text-gray-700">Job Description</label>
                            <ReactQuill
                                theme="snow"
                                value={formData.description}
                                onChange={handleQuillChange}
                                className="border rounded-lg"
                            />
                        </div>

                        {/* Qualification & Skills */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="font-semibold text-gray-700">Qualification</label>
                                <input
                                    type="text"
                                    name="qualification"
                                    value={formData.qualification}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0"
                                    placeholder="Enter qualifications"
                                    required
                                />
                            </div>
                            <div>
                                <label className="font-semibold text-gray-700">Skills</label>
                                <input
                                    type="text"
                                    name="skills"
                                    value={formData.skills}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0"
                                    placeholder="Comma-separated skills"
                                />
                            </div>
                        </div>

                        {/* Experience & Language Requirements */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="font-semibold text-gray-700">Experience</label>
                                <input
                                    type="text"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0"
                                    placeholder="e.g., 0-3 years"
                                />
                            </div>
                            <div>
                                <label className="font-semibold text-gray-700">Languages Required</label>
                                <input
                                    type="text"
                                    name="languageRequire"
                                    value={formData.languageRequire}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0"
                                    placeholder="e.g., English, Spanish"
                                    required
                                />
                            </div>
                        </div>

                        {/* Location */}
                        <div>
                            <label className="font-semibold text-gray-700">Location</label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0"
                                placeholder="Enter job location"
                                required
                            />
                        </div>

                        {/* Modal Actions */}
                        <div className="flex justify-end gap-4 mt-4">
                            <button type="button" className="px-5 py-2 border border-gray-400 text-gray-600 rounded-lg hover:bg-gray-200 transition" onClick={handleCloseModal}>
                                Close
                            </button>
                            <button type="submit" className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                Update Job
                            </button>
                        </div>
                    </form>
                </div>
            </div>



        </>

    );
};

export default JobUpdateModal;
