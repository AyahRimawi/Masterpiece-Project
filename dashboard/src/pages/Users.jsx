import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "../components/Users/UserList";
import UserActions from "../components/Users/UserActions";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api/admin/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleUserAction = async (action, userId) => {
    try {
      await axios.post(`/api/admin/users/${userId}/${action}`);
      fetchUsers();
    } catch (error) {
      console.error(`Error ${action} user:`, error);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-gray-800">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <UserList users={users} onSelectUser={setSelectedUser} />
        </div>
        <div>
          <UserActions
            selectedUser={selectedUser}
            onAction={handleUserAction}
          />
        </div>
      </div>
    </div>
  );
};

export default Users;
