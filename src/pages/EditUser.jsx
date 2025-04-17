
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ name: "", username: "", email: "" });

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:3000/users/${id}`);
      setUserData(res.data);
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/users/${id}`, userData);
    navigate("/user");
  };

  return (
    <>
      <Header />
      <div className="container">
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-2"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <input
            type="text"
            className="form-control mb-2"
            value={userData.username}
            onChange={(e) => setUserData({ ...userData, username: e.target.value })}
          />
          <input
            type="email"
            className="form-control mb-2"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
          <button className="btn btn-primary">Update</button>
        </form>
      </div>
    </>
  );
}

export default EditUser;
