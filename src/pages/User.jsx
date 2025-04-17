import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
const User = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/users");
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("delete user?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      alert("deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("error");
    }
  };

  return (
   <>
   <Header/>
   
   <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User List</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">name</th>
            <th className="py-2 px-4 border-b">email</th>
            <th className="py-2 px-4 border-b">functions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className="button edit-button"
                  onClick={() => navigate(`/edit/${user.id}`)}
                >
                  edit
                </button>
                <button
                  className="button delete-button"
                  onClick={() => handleDelete(user.id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-center">
        <button
          className="btn btn-success"
          onClick={() => navigate("/add-user")}
        >
          add new user
        </button>
      </div>
    </div>
   </>
  );
};

export default User;
