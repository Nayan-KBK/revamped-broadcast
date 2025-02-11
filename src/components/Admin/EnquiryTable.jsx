import React, { useEffect, useState } from "react";

const EnquiryTable = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://kbk-broadcasting-backend.vercel.app/get-contact-form")
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setEnquiries(sortedData);
        setLoading(false);
        console.log("Enquiry Table Sorted Data", sortedData);
      })
      .catch((error) => {
        console.error("Error fetching enquiries:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Enquiry Messages</h2>
      {loading ? (
        <p className="text-gray-600">Loading enquiries...</p>
      ) : enquiries.length === 0 ? (
        <p className="text-gray-600">No enquiries found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-left text-gray-700">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-3">Name</th>
                <th className="border px-4 py-3">Email</th>
                <th className="border px-4 py-3">Mobile</th>
                <th className="border px-4 py-3">Subject</th>
                <th className="border px-4 py-3">Message</th>
                <th className="border px-4 py-3">Submitted At</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enquiry) => (
                <tr key={enquiry._id} className="hover:bg-gray-50">
                  <td className="border px-4 py-3">{enquiry.firstName} {enquiry.lastName}</td>
                  <td className="border px-4 py-3">{enquiry.email}</td>
                  <td className="border px-4 py-3">{enquiry.mobile}</td>
                  <td className="border px-4 py-3">{enquiry.subject}</td>
                  <td className="border px-4 py-3">{enquiry.message}</td>
                  <td className="border px-4 py-3">{new Date(enquiry.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EnquiryTable;
