const PersonalInfo = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#193db0] focus:border-[#193db0]"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#193db0] focus:border-[#193db0]"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#193db0] focus:border-[#193db0]"
          />
        </div>
        <div>
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#193db0] focus:border-[#193db0]"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="bg-[#193db0] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};
export default PersonalInfo;
