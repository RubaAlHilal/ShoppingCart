import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function AddUser() {
  const [userData, setUserData] = useState({ name: "", username: "", email: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/users", userData);
    navigate("/user");
  };

  return (
    <>
      <Header />
      <div className="container">
        <h2>Add User</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="form-control mb-2"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Username"
            className="form-control mb-2"
            value={userData.username}
            onChange={(e) => setUserData({ ...userData, username: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="form-control mb-2"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </>
  );
}

export default AddUser;