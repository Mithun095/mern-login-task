import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any stored data (if any)
    localStorage.clear();
    navigate("/"); // Redirect to login page
  };

  return (
    <div style={{ textAlign: "center", marginTop: "150px" }}>
      <h1>This is Home Page</h1>
      <p>Welcome! You are logged in.</p>
      <button
        onClick={handleLogout}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}
