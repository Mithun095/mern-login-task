import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.message === "Login successful") {
        alert("Login successful!");
        localStorage.setItem("token", data.token);
        navigate("/home");
      } else {
        alert(data.err || "Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #e8f5e9, #c8e6c9)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          background: "white",
          padding: "40px 60px",
          borderRadius: "15px",
          boxShadow: "0px 6px 20px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#2e7d32", marginBottom: "25px" }}>Login</h2>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Login
        </button>
        <p style={{ marginTop: "15px" }}>
          <a href="/signup" style={{ color: "#2e7d32", textDecoration: "none" }}>
            Don’t have an account? Signup
          </a>
        </p>
      </form>
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "250px",
  margin: "10px auto",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "15px",
};

const buttonStyle = {
  marginTop: "15px",
  padding: "10px 25px",
  fontSize: "16px",
  backgroundColor: "#2e7d32",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "0.3s",
};
