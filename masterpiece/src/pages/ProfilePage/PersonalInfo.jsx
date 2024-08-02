import React, { useState, useEffect } from "react";

const PersonalInfo = () => {
  const [personalData, setPersonalData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Load personal data from localStorage on component mount
    const savedData = JSON.parse(localStorage.getItem("personalInfo") || "{}");
    setPersonalData(savedData);
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setPersonalData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save personal data to localStorage
    localStorage.setItem("personalInfo", JSON.stringify(personalData));
    setIsEditing(false);
    alert("Personal information saved successfully!");
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    // Reset to saved data and exit edit mode
    const savedData = JSON.parse(localStorage.getItem("personalInfo") || "{}");
    setPersonalData(savedData);
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          {isEditing ? (
            <input
              type="text"
              id="name"
              value={personalData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#193db0] focus:border-[#193db0]"
              required
            />
          ) : (
            <p className="w-full p-2 bg-gray-100 rounded-md">
              {personalData.name || "Not provided"}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          {isEditing ? (
            <input
              type="email"
              id="email"
              value={personalData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#193db0] focus:border-[#193db0]"
              required
            />
          ) : (
            <p className="w-full p-2 bg-gray-100 rounded-md">
              {personalData.email || "Not provided"}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number
          </label>
          {isEditing ? (
            <input
              type="tel"
              id="phone"
              value={personalData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#193db0] focus:border-[#193db0]"
              required
            />
          ) : (
            <p className="w-full p-2 bg-gray-100 rounded-md">
              {personalData.phone || "Not provided"}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Date of Birth
          </label>
          {isEditing ? (
            <input
              type="date"
              id="dob"
              value={personalData.dob}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#193db0] focus:border-[#193db0]"
              required
            />
          ) : (
            <p className="w-full p-2 bg-gray-100 rounded-md">
              {personalData.dob || "Not provided"}
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        {isEditing ? (
          <>
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#193db0] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Save Changes
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={handleEdit}
            className="bg-[#193db0] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Edit Information
          </button>
        )}
      </div>
    </form>
  );
};

export default PersonalInfo;
