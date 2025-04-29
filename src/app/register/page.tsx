"use client";

import React, { useState } from "react";
import clsx from "clsx"; // Install clsx via `npm install clsx`

export default function Register() {
  const [formData, setFormData] = useState({
    profileImage: "",
    fullName: "",
    email: "",
    password: "",
    mobileNumber: "",
    dateOfBirth: "",
    gender: "",
    parentContact: "",
    educationLevel: "",
    classCourseCombination: "",
    schoolCollegeName: "",
    state: "",
    city: "",
    postalCode: "",
    totalFees: "",
    pendingFees: "",
    feeStructureImage: "",
    idCardImage: "",
    marksheetImage: "",
    collegeApprovalLetter: "",
    studentSummary: "",
    collegeBankDetails: {
      bankName: "",
      accountNumber: "",
      ifscCode: "",
      branch: "",
    },
    previousScholarship: "",
    consent: false,
  });

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else if (name.startsWith("collegeBankDetails")) {
      const [parentKey, childKey] = name.split(".");
      setFormData((prevState) => ({
        ...prevState,
        [parentKey]: {
          ...prevState[parentKey],
          [childKey]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setFormData((prevState) => ({
        ...prevState,
        [fieldName]: file,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit the form data to the backend or perform validation
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-pink-500 to-purple-600 flex items-center justify-center p-6">
      <div className="w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 bg-white p-8 rounded-lg shadow-2xl">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">Register as a Student</h2>
        <form onSubmit={handleSubmit}>
          {/* Profile Image */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Profile Image</label>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, "profileImage")}
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Full Name */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              minLength={8}
            />
          </div>

          {/* Mobile Number */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Date of Birth */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Gender */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Parent Contact */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Parent Contact</label>
            <input
              type="text"
              name="parentContact"
              value={formData.parentContact}
              onChange={handleInputChange}
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Education Level */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Education Level</label>
            <select
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleInputChange}
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">Select Education Level</option>
              <option value="primary">Primary Education</option>
              <option value="secondary">Secondary Education</option>
              <option value="higher">Higher Education</option>
              <option value="professional">Professional Courses</option>
            </select>
          </div>

          {/* Class / Course / Combination or Stream */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Class / Course / Combination / Stream</label>
            <input
              type="text"
              name="classCourseCombination"
              value={formData.classCourseCombination}
              onChange={handleInputChange}
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* School/College Name */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">School/College Name</label>
            <input
              type="text"
              name="schoolCollegeName"
              value={formData.schoolCollegeName}
              onChange={handleInputChange}
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* State */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* City */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Postal Code */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Total Fees */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Total Fees</label>
            <input
              type="text"
              name="totalFees"
              value={formData.totalFees}
              onChange={handleInputChange}
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Pending Fees */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Pending Fees</label>
            <input
              type="text"
              name="pendingFees"
              value={formData.pendingFees}
              onChange={handleInputChange}
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Fee Structure Image */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Fee Structure Image</label>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, "feeStructureImage")}
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* ID Card Image */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">ID Card Image</label>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, "idCardImage")}
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Marksheet Image */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Marksheet Image</label>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, "marksheetImage")}
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* College Approval Letter */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">College Approval Letter</label>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, "collegeApprovalLetter")}
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Student Summary */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Student Summary</label>
            <textarea
              name="studentSummary"
              value={formData.studentSummary}
              onChange={handleInputChange}
              rows={5}
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Bank Details */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Bank Details</h3>
            <input
              type="text"
              name="collegeBankDetails.bankName"
              value={formData.collegeBankDetails.bankName}
              onChange={handleInputChange}
              placeholder="Bank Name"
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              name="collegeBankDetails.accountNumber"
              value={formData.collegeBankDetails.accountNumber}
              onChange={handleInputChange}
              placeholder="Account Number"
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-2"
            />
            <input
              type="text"
              name="collegeBankDetails.ifscCode"
              value={formData.collegeBankDetails.ifscCode}
              onChange={handleInputChange}
              placeholder="IFSC Code"
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-2"
            />
            <input
              type="text"
              name="collegeBankDetails.branch"
              value={formData.collegeBankDetails.branch}
              onChange={handleInputChange}
              placeholder="Branch"
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-2"
            />
          </div>

          {/* Previous Scholarship */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Previous Scholarship</label>
            <input
              type="text"
              name="previousScholarship"
              value={formData.previousScholarship}
              onChange={handleInputChange}
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label className="text-lg text-gray-700">I consent to the terms and conditions</label>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={!formData.consent} // Disable if consent checkbox is not checked
              className={clsx(
                "bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300",
                { "opacity-50 cursor-not-allowed": !formData.consent }
              )}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
