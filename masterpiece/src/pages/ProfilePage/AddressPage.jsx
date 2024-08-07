import React, { useState, useEffect } from "react";

const AddressPage = () => {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState({
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const savedAddresses = JSON.parse(
      localStorage.getItem("addresses") || "[]"
    );
    setAddresses(savedAddresses);
  }, []);

  const saveAddresses = (updatedAddresses) => {
    setAddresses(updatedAddresses);
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing && editIndex !== null) {
      const updatedAddresses = [...addresses];
      updatedAddresses[editIndex] = newAddress;
      saveAddresses(updatedAddresses);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      saveAddresses([...addresses, newAddress]);
    }
    setNewAddress({
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    });
  };

  const handleEdit = (index) => {
    setNewAddress(addresses[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    saveAddresses(updatedAddresses);
  };

  return (
    <div className="bg-white min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <h2 className="text-3xl font-bold text-center text-[#193db0] mb-8">
          My Addresses
        </h2>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="street"
              value={newAddress.street}
              onChange={handleInputChange}
              placeholder="Street Address"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-[#193db0] focus:ring focus:ring-blue-200 transition duration-200"
              required
            />
            <input
              type="text"
              name="city"
              value={newAddress.city}
              onChange={handleInputChange}
              placeholder="City"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-[#193db0] focus:ring focus:ring-blue-200 transition duration-200"
              required
            />
            {/* <input
              type="text"
              name="state"
              value={newAddress.state}
              onChange={handleInputChange}
              placeholder="State"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-[#193db0] focus:ring focus:ring-blue-200 transition duration-200"
              required
            /> */}
            {/* <input
              type="text"
              name="zipCode"
              value={newAddress.zipCode}
              onChange={handleInputChange}
              placeholder="Zip Code"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-[#193db0] focus:ring focus:ring-blue-200 transition duration-200"
              required
            /> */}
            <input
              type="text"
              name="country"
              value={newAddress.country}
              onChange={handleInputChange}
              placeholder="Country"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-[#193db0] focus:ring focus:ring-blue-200 transition duration-200"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-[#193db0] text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {isEditing ? "Update Address" : "Add Address"}
          </button>
        </form>

        <div className="space-y-4">
          {addresses.map((address, index) => (
            <div key={index} className="bg-blue-50 p-4 rounded-xl shadow">
              <p className="font-semibold text-[#193db0]">{address.street}</p>
              <p className="text-gray-600">
                {address.city}, {address.state} {address.zipCode}
              </p>
              <p className="text-gray-600">{address.country}</p>
              <div className="mt-2 flex justify-end space-x-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="px-3 py-1 bg-blue-100 text-[#193db0] rounded-md hover:bg-blue-200 transition duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="px-3 py-1 bg-red-100 text-red-800 rounded-md hover:bg-red-200 transition duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddressPage;
