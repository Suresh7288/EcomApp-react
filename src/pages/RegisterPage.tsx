import { useState } from "react";
import api from "../services/api";

const RegisterPage = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", form);
      alert("Registered successfully!");
    } catch (err) {
      alert("Registration failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <input className="w-full border p-2" name="name" placeholder="Name" onChange={handleChange} required />
      <input className="w-full border p-2" name="email" placeholder="Email" onChange={handleChange} required />
      <input className="w-full border p-2" name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button className="bg-blue-600 text-white w-full py-2" type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
