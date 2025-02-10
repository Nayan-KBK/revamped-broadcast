import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import joinOurTeam from '../../assets/join-our-team.png'
import vibrantEnvironment from '../../assets/vibrant-cultural-environment.png'
import followers from '../../assets/followers_3660732.png'
import growth from '../../assets/growth_2163392.png'
import caseMy from '../../assets/case.png'




function Career() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('https://kbk-broadcasting-backend.vercel.app/get-jobs');
                const activeJobs = response.data.filter(job => job.status.status === 'active');
                setJobs(activeJobs);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    return (
        <>  
            <section className="bg-gradient-to-r from-[#000] to-[#2d3a8e] sm:h-[70vh] h-[80vh] px-[5vw] sm:px-[15vw] flex">
                <div className="container mx-auto w-full pt-30">
                    <div className="grid md:grid-cols-2 h-full ">
                        <div className="flex flex-col justify-center space-y-6">
                            <h6 className="text-white text-2xl">Be Part of Something Extraordinary</h6>
                            <h1 className="text-white text-5xl font-bold">Join Our Team</h1>
                            <h5 className="text-white text-xl">Join us and be part of a dynamic, welcoming, and professional environment where your skills and talents shine.</h5>
                        </div>

                        <div className="flex items-end h-full">
                            <img
                                src={joinOurTeam}
                                alt="Banner"
                                className="w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>



            <section className="mt-10 container mx-auto px-[5vw] sm:px-[15vw] flex flex-col ">
                <h1 className="mb-4 text-blue-800 text-3xl font-bold tracking-wider">Why Join KBK Broadcasting</h1>
                <h6 className="mb-4 text-lg">Be Part of Something Extraordinary</h6>
                <p className="mb-4 text-lg">Join us and be part of a dynamic, welcoming, and professional environment where your skills and talents shine.</p>
            </section>





            <section className="my-10 container mx-auto px-[5vw] sm:px-[15vw]">
                <p className="text-blue-800 text-2xl font-bold mb-6">Why Join Us?</p>
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <img className="w-20 mx-auto mb-4" src={vibrantEnvironment} alt="Innovative Projects" />
                        <h5 className="text-lg font-semibold">Innovative Projects</h5>
                        <p>Work on cutting-edge technologies and exciting projects that make a difference.</p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <img className="w-20 mx-auto mb-4" src={followers} alt="Collaborative Team" />
                        <h5 className="text-lg font-semibold">Collaborative Team</h5>
                        <p>Be part of a dynamic, diverse, and supportive team that values collaboration.</p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <img className="w-20 mx-auto mb-4" src={growth} alt="Growth Opportunities" />
                        <h5 className="text-lg font-semibold">Growth Opportunities</h5>
                        <p>Grow your skills and career with plenty of learning and development opportunities.</p>
                    </div>
                </div>
            </section>

            <section className="my-10 container mx-auto px-[5vw] sm:px-[15vw]">
                <h2 className="mb-4 text-red-600 text-3xl font-bold">Available Positions</h2>
                <p className="mb-5">Thank you for your interest in joining our team! Currently, we are not hiring, but we appreciate your enthusiasm.</p>
                {!loading ? (
                    <div className="grid md:grid-cols-3 gap-6">
                        {jobs.map((position) => (
                            <div key={position._id} className="bg-white shadow-md rounded-lg p-6 text-center">
                                <img className="w-16 mx-auto mb-4" src={caseMy} alt="Job Icon" />
                                <h4 className="text-blue-800 text-xl font-semibold">{position.title}</h4>
                                <p><strong>Location:</strong> {position.location}</p>
                                <p><strong>Experience:</strong> {position.experience} years</p>
                                <Link to={`/apply/${position._id}`} className="bg-red-600 text-white px-4 py-2 rounded-lg inline-block mt-4 hover:bg-red-700">
                                    Apply Now
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-yellow-500 text-center">Loading . . . .</p>
                )}
                {error && <p className="text-red-500 text-center">Error....</p>}
            </section>
        </>
    );
}

export default Career;
