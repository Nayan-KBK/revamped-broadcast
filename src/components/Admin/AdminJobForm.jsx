import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AdminJobForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        postingDate: "",
        expireDate: "",
        jobType: "",
        description: "",
        qualification: "",
        skills: "",
        languageRequire: "",
        location: "",
        experience: "",
    });

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setFormData((prev) => ({ ...prev, postingDate: today }));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://kbk-broadcasting-backend.vercel.app/add-jobs", formData, {
                headers: { "Content-Type": "application/json" },
            });

            if (response.status === 201) {
                alert("Job added successfully");
                setFormData({
                    title: "",
                    postingDate: "",
                    expireDate: "",
                    jobType: "",
                    description: "",
                    qualification: "",
                    skills: "",
                    languageRequire: "",
                    location: "",
                    experience: "",
                });
            } else {
                alert("Failed to add job");
            }
        } catch (error) {
            console.error("Error adding job:", error);
            alert("Error adding job: " + (error.response?.data?.message || error.message));
        }
    };

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ["link"],
        ],
    };

    const formats = [
        "header", "bold", "italic", "underline", "list", "bullet", "color", "background", "align", "link"
    ];

    return (
        <div className="w-full mx-auto mt-5 p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-4xl font-semibold text-center text-red-600 mb-6">Add New Job</h1>
            {/* <hr className="mb-6 h-1" /> */}
            <hr className="mb-6 h-px bg-gray-400 border-0" />
            <form onSubmit={handleSubmit}>
                <label className="font-bold block mb-2">Enter Job Position<span className="text-red-500">*</span></label>
                <input
                    type="text"
                    className="w-full p-3 border border-gray-400 rounded-lg mb-4 focus:border-gray-800 outline-none focus:ring-0"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter job title"
                    required
                    onKeyUp={(e) => { e.target.value = e.target.value.replace(/[^a-zA-Z\s0-9-.,]/g, ''); }}

                />


                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                    <div>
                        <label className="font-bold mb-2 block">Posting Date<span className="text-red-500">*</span></label>
                        <input type="date" className="w-full p-3 border border-gray-400 rounded-lg mb-4 focus:border-gray-800 outline-none focus:ring-0" name="postingDate" value={formData.postingDate} onChange={handleInputChange} required />
                    </div>
                    <div>
                        <label className="font-bold mb-2 block">Expire Date<span className="text-red-500">*</span></label>
                        <input type="date" className="w-full p-3 border border-gray-400 rounded-lg mb-4 focus:border-gray-800 outline-none focus:ring-0" name="expireDate" value={formData.expireDate} onChange={handleInputChange} required />
                    </div>

                    <div>
                        <label className="font-bold mb-2 block">Job Type<span className="text-red-500">*</span></label>
                        <select className="w-full p-3 border border-gray-400 rounded-lg mb-4 focus:border-gray-800 outline-none focus:ring-0" name="jobType" value={formData.jobType} onChange={handleInputChange} required>
                            <option value="">Select Job Type</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                        </select>
                    </div>
                    <div>
                        <label className="font-bold mb-2 block">Location<span className="text-red-500">*</span></label>
                        <input type="text" className="w-full p-3 border border-gray-400 rounded-lg mb-4 focus:border-gray-800 outline-none focus:ring-0" name="location" value={formData.location} onChange={handleInputChange} required onKeyUp={(e) => { e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); }} placeholder='Enter Job Location' />
                    </div>
                </div>






                <div className="grid grid-cols-4 gap-4 mt-6">

                    <div className='col-span-1'>
                        <label className="font-bold mb-2 block">Qualification<span className="text-red-500">*</span></label>
                        <input type="text" className="w-full p-3 border border-gray-400 rounded-lg mb-4 focus:border-gray-800 outline-none focus:ring-0" name="qualification" value={formData.qualification} onChange={handleInputChange} required onKeyUp={(e) => { e.target.value = e.target.value.replace(/[^a-zA-Z\s0-9-]/g, ''); }} placeholder='Enter Qualification' />
                    </div>


                    <div className='col-span-3'>
                        <label className="font-bold mb-2 block">Skills<span className="text-red-500">*</span></label>
                        <input type="text" className="w-full p-3 border border-gray-400 rounded-lg mb-4 focus:border-gray-800 outline-none focus:ring-0" name="skills" value={formData.skills} onChange={handleInputChange} required onKeyUp={(e) => { e.target.value = e.target.value.replace(/[^a-zA-Z\s0-9-,]/g, ''); }} placeholder="Write comma-separated skills (e.g. React, JavaScript)"
                        />
                    </div>

                </div>







                <div className="grid grid-cols-4 gap-4 mt-6">

                    <div className='col-span-1'>
                        <label className="font-bold mb-2 block">Experience<span className="text-red-500">*</span></label>
                        <input type="text" className="w-full p-3 border border-gray-400 rounded-lg mb-4 focus:border-gray-800 outline-none focus:ring-0" name="experience" value={formData.experience} onChange={handleInputChange} required onKeyUp={(e) => { e.target.value = e.target.value.replace(/[^a-zA-Z\s0-9-]/g, ''); }} placeholder='eg. 0-3' />
                    </div>


                    <div className='col-span-3'>
                        <label className="font-bold mb-2 block">Language Requirements<span className="text-red-500">*</span></label>
                        <input type="text" className="w-full p-3 border border-gray-400 rounded-lg mb-4 focus:border-gray-800 outline-none focus:ring-0" name="languageRequire" value={formData.languageRequire} onChange={handleInputChange} required onKeyUp={(e) => { e.target.value = e.target.value.replace(/[^a-zA-Z\s0-9-,]/g, ''); }} placeholder="Write comma-separated skills (e.g. React, JavaScript)"
                        />
                    </div>

                </div>







                <label className="font-bold block mt-6">Description<span className="text-red-500">*</span></label>
                <ReactQuill className="mb-6  border border-gray-400  focus:border-gray-800 outline-none focus:ring-0 rounded-lg my-3" theme="snow" value={formData.description} onChange={(value) => setFormData({ ...formData, description: value })} modules={modules} formats={formats} placeholder="Enter job description"
                />

                <button type="submit" className="w-full p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition cursor-pointer">Submit</button>
            </form>
        </div>
    );
};

export default AdminJobForm;
