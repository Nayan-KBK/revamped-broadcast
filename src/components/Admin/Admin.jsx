import React, { useEffect, useState } from "react";
import AuthAdmin from "./AuthAdmin";
import AdminJobForm from "./AdminJobForm";
import AdminAllJobs from "./AdminAllJobs";
import ApplicationsTable from "./ApplicationsTable";
import EnquiryTable from "./EnquiryTable";

const Admin = () => {
    // State to manage selected section
    const [activeSection, setActiveSection] = useState("Dashboard");
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

    useEffect(() => {
        const authToken = localStorage.getItem("role");
        setIsLoggedIn(!!authToken);
    }, []);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true); // Update state after login
    };

    const handleLogout = () => {
        console.log("Logout called");
        localStorage.removeItem("role");
        document.cookie = "auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        setIsLoggedIn(false);
    };

    // Dynamic content for different sections
    const renderContent = () => {
        switch (activeSection) {
            case "Dashboard":
                return <AdminJobForm />;
            case "Users":
                return <AdminAllJobs />;
                // return <p>User</p>
            case "Application":
                return <ApplicationsTable />;
                // return <p>Application</p>
            case "contact":
                return <EnquiryTable />;
                // return <p>Application</p>
            default:
                return <div>Select a section</div>;
        }
    };

    return (
        <>
            <div className="pt-20 bg-gray-500">
                {/* <hr className="text-black"/> */}



                {!isLoggedIn ? (
                    <AuthAdmin onLoginSuccess={handleLoginSuccess} />
                ) : (
                    <div className="flex min-h-screen bg-gray-100">
                        {/* Sidebar */}
                        <div className="w-64 bg-gray-900 text-white p-5">
                            <h3 className="text-center text-xl font-semibold mb-6">Admin Panel</h3>
                            <ul className="space-y-3">
                                <li>
                                    <button
                                        className={`w-full text-left px-4 py-2 rounded-lg transition ${activeSection === "Dashboard"
                                            ? "bg-blue-600"
                                            : "hover:bg-gray-700"
                                            }`}
                                        onClick={() => setActiveSection("Dashboard")}
                                    >
                                        Add Jobs
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`w-full text-left px-4 py-2 rounded-lg transition ${activeSection === "Users"
                                            ? "bg-blue-600"
                                            : "hover:bg-gray-700"
                                            }`}
                                        onClick={() => setActiveSection("Users")}
                                    >
                                        All Jobs
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`w-full text-left px-4 py-2 rounded-lg transition ${activeSection === "Application"
                                            ? "bg-blue-600"
                                            : "hover:bg-gray-700"
                                            }`}
                                        onClick={() => setActiveSection("Application")}
                                    >
                                        Applications Received
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`w-full text-left px-4 py-2 rounded-lg transition ${activeSection === "contact"
                                            ? "bg-blue-600"
                                            : "hover:bg-gray-700"
                                            }`}
                                        onClick={() => setActiveSection("contact")}
                                    >
                                        Contact Form Enquiry
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 p-6">
                            <div>{renderContent()}</div>
                        </div>

                        {/* Logout Button */}
                        <button
                            onClick={handleLogout}
                            className=" cursor-pointer absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg z-20"
                        >   
                            Logout
                        </button>
                    </div>
                )}
                </div>
            </>
            );
};

            export default Admin;
