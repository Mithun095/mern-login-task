import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      alert(data.message || data.err);
    } catch (error) {
      console.error("Error during signup:", error);
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
        background: "linear-gradient(135deg, #fce4ec, #f8bbd0)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <form
        onSubmit={handleSignup}
        style={{
          background: "white",
          padding: "40px 60px",
          borderRadius: "15px",
          boxShadow: "0px 6px 20px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#ad1457", marginBottom: "25px" }}>Signup</h2>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
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
          Signup
        </button>
        <p style={{ marginTop: "15px" }}>
          <a href="/" style={{ color: "#ad1457", textDecoration: "none" }}>
            Already have an account? Login
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
  backgroundColor: "#ad1457",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "0.3s",
};
