import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import JobUpdateModal from "./Jobmodal";

const AdminAllJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedJobId, setSelectedJobId] = useState(null);

    useEffect(() => {
        axios
            .get("https://kbk-broadcasting-backend.vercel.app/get-jobs")
            .then((response) => setJobs(response.data))
            .catch((error) => console.error("Error fetching jobs:", error));
    }, []);

    const toggleStatus = (jobId) => {
        setJobs((prevJobs) =>
            prevJobs.map((job) =>
                job._id === jobId
                    ? { ...job, status: { ...job.status, status: job.status.status === "active" ? "inactive" : "active" } }
                    : job
            )
        );

        axios
            .put(`https://kbk-broadcasting-backend.vercel.app/change-status/${jobId}`)
            .then((response) => console.log(response.data.message))
            .catch((error) => {
                console.error("Error updating job status:", error);
                setJobs((prevJobs) =>
                    prevJobs.map((job) =>
                        job._id === jobId
                            ? { ...job, status: job.status === "active" ? "inactive" : "active" }
                            : job
                    )
                );
            });
    };

    const handleDelete = async (jobId) => {
        try {
            const response = await axios.delete(
                `https://kbk-broadcasting-backend.vercel.app/api/delete-job/${jobId}`
            );
            alert("Job deleted successfully!");
            setJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
        } catch (error) {
            console.error("Error deleting job:", error);
            alert("Failed to delete job. Please try again.");
        }
    };

    const openModal = (jobId) => {
        setSelectedJobId(jobId);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedJobId(null);
    };

    return (
        <div className="max-w-6xl mx-auto mt-6 p-4">
            <h3 className="text-2xl font-semibold text-center mb-6">All Jobs</h3>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 ">
                {jobs.map((job) => (
                    <div key={job._id} className="bg-white rounded-lg shadow-md p-4  text-center ">
                        <h5 className="text-xl font-semibold text-gray-700 truncate my-4">{job.title}</h5>
                        <p className="text-m text-gray-600 my-4"><strong>Location:</strong> {job.location}</p>
                        <p className="text-m text-gray-600 my-4"><strong>Experience:</strong> {job.experience} years</p>

                        <hr className="my-3" />

                        <div className="flex items-center justify-between">
                            {/* Status Button */}
                            <button
                                className={` cursor-pointer px-5 py-2 text-sm rounded-lg ${
                                    job.status.status === "active"
                                        ? "bg-green-700 text-white"
                                        : "bg-red-500 text-white"
                                }`}
                                onClick={() => toggleStatus(job._id)}
                            >
                                {job.status.status === "active" ? "Active" : "Inactive"}
                            </button>

                            {/* Edit and Delete Icons */}
                            <div className="flex space-x-4">
                                <FaEdit
                                    className="text-blue-500 cursor-pointer"
                                    size={20}
                                    onClick={() => openModal(job._id)}
                                />
                                <FaTrash
                                    className="text-red-500 cursor-pointer"
                                    size={20}
                                    onClick={() => handleDelete(job._id)}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <JobUpdateModal jobId={selectedJobId} showModal={showModal} handleCloseModal={closeModal} />
        </div>
    );
};

export default AdminAllJobs;
