import React, { useState, useEffect } from "react";
import { login } from "../../services/UserService";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
    const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await login(username, password);
      // console.log("Login successful:", res);
      if (res?.status == 200) {
        localStorage.setItem("token", res.data.access_token);
        navigate("/dashboard");
      } else {
        setError("Username or password không đúng!");
      }
      // Handle successful login, e.g., redirect to another page
    } catch (error) {
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };
 useEffect(() => {
   document.title = "Login - Video APP Lopte";
  
   // document.body.classList.add("overflow-hidden");
   // return () => {
   //   document.body.classList.remove("overflow-hidden");
   // };
   // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      style={{ backgroundColor: "#DFDFDF" }}
    >
      <div className="p-6 max-w-sm w-full bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">ĐĂNG NHẬP</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Tài Khoản</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Mật Khẩu</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            disabled={loading}
            style={{ backgroundColor: "#057189" }}
          >
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
