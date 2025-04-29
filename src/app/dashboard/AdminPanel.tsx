import React, { useState, useEffect } from "react";

const AdminPanel = () => {
  // Sample data for student applications
  const studentApplications = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      applicationStatus: "Pending",
      amountRequested: "$500",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      applicationStatus: "Pending",
      amountRequested: "$1000",
    },
    // Add more student data as needed
  ];

  // Handling approve/reject logic (just simple state here for demonstration)
  const [applications, setApplications] = useState(studentApplications);

  const handleApprove = (id: number) => {
    setApplications((prevApplications) =>
      prevApplications.map((app) =>
        app.id === id
          ? { ...app, applicationStatus: "Approved" }
          : app
      )
    );
  };

  const handleReject = (id: number) => {
    setApplications((prevApplications) =>
      prevApplications.map((app) =>
        app.id === id
          ? { ...app, applicationStatus: "Rejected" }
          : app
      )
    );
  };

  return (
    <div className="admin-panel-container flex">
      {/* Sidebar */}
      <div className="sidebar bg-gray-800 text-white w-1/4 p-4">
        <h2 className="text-xl font-semibold mb-4">Admin Dashboard</h2>
        <ul>
          <li className="mb-3 hover:text-gray-400 cursor-pointer">View Applications</li>
          <li className="mb-3 hover:text-gray-400 cursor-pointer">Manage Users</li>
          <li className="mb-3 hover:text-gray-400 cursor-pointer">Settings</li>
          {/* Add more navigation options as needed */}
        </ul>
      </div>

      {/* Main Panel */}
      <div className="main-panel w-3/4 p-6">
        <h1 className="text-3xl font-semibold mb-6">Student Applications</h1>

        {/* Table of Applications */}
        <div className="application-list bg-white p-4 rounded-lg shadow-lg">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="border-b p-2">Name</th>
                <th className="border-b p-2">Email</th>
                <th className="border-b p-2">Amount Requested</th>
                <th className="border-b p-2">Status</th>
                <th className="border-b p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td className="border-b p-2">{app.name}</td>
                  <td className="border-b p-2">{app.email}</td>
                  <td className="border-b p-2">{app.amountRequested}</td>
                  <td className="border-b p-2">
                    <span
                      className={`${
                        app.applicationStatus === "Pending"
                          ? "text-yellow-500"
                          : app.applicationStatus === "Approved"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {app.applicationStatus}
                    </span>
                  </td>
                  <td className="border-b p-2 flex space-x-2">
                    {app.applicationStatus === "Pending" && (
                      <>
                        <button
                          className="bg-green-500 text-white px-4 py-2 rounded"
                          onClick={() => handleApprove(app.id)}
                        >
                          Approve
                        </button>
                        <button
                          className="bg-red-500 text-white px-4 py-2 rounded"
                          onClick={() => handleReject(app.id)}
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
