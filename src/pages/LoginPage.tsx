import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      login(res.data.token); // store JWT token
    } catch (err) {
      alert("Login failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input className="w-full border p-2" name="email" placeholder="Email" onChange={handleChange} required />
      <input className="w-full border p-2" name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button className="bg-blue-600 text-white w-full py-2" type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
