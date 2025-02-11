import React, { useEffect, useState } from "react";

const ApplicationsTable = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://kbk-broadcasting-backend.vercel.app/get-applications")
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));
        setApplications(sortedData);
        setLoading(false);
        console.log("Application Table Sorted Data", sortedData);
      })
      .catch((error) => {
        console.error("Error fetching applications:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Job Applications</h2>
      {loading ? (
        <p className="text-gray-600">Loading applications...</p>
      ) : applications.length === 0 ? (
        <p className="text-gray-600">No applications found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-left text-gray-700">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-3">Job Title</th>
                <th className="border px-4 py-3">Name</th>
                <th className="border px-4 py-3">Email</th>
                <th className="border px-4 py-3">Mobile</th>
                <th className="border px-4 py-3">Qualification</th>
                <th className="border px-4 py-3">Address</th>
                <th className="border px-4 py-3">Video Link</th>
                <th className="border px-4 py-3">Resume</th>
                <th className="border px-4 py-3">Submitted At</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app._id} className="hover:bg-gray-50">
                  <td className="border px-4 py-3">{app.jobTitle}</td>
                  <td className="border px-4 py-3">{app.firstName} {app.lastName}</td>
                  <td className="border px-4 py-3">{app.email}</td>
                  <td className="border px-4 py-3">{app.mobile}</td>
                  <td className="border px-4 py-3">{app.qualification}</td>
                  <td className="border px-4 py-3">{app.address}</td>
                  <td className="border px-4 py-3">
                    <a href={app.videoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                      Video
                    </a>
                  </td>
                  <td className="border px-4 py-3">
                    <a href={app.cvLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                      Resume
                    </a>
                  </td>
                  <td className="border px-4 py-3">{new Date(app.submittedAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ApplicationsTable;
