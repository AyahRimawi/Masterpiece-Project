import React from "react";

const UserList = ({ users, onSelectUser }) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {users.map((user) => (
          <li key={user._id}>
            <div
              className="px-4 py-4 sm:px-6 hover:bg-gray-50 cursor-pointer"
              onClick={() => onSelectUser(user)}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-black truncate">
                  {user.name}
                </p>
                <div className="ml-2 flex-shrink-0 flex">
                  <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {user.isActive ? "Active" : "Inactive"}
                  </p>
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                  <p className="flex items-center text-sm text-gray-500">
                    {user.email}
                  </p>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                  <p>Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
