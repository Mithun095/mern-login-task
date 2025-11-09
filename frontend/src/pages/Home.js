import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    const fetchHomeData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login first!");
        navigate("/");
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/home", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.ok) {
          setUser(data.user);
        } else {
          alert(data.err || "Session expired, please login again.");
          handleLogout();
        }
      } catch (err) {
        console.error("Error fetching home data:", err);
        alert("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, [navigate]);

  if (loading) {
    return (
      <p style={{ textAlign: "center", marginTop: "150px", fontSize: "18px" }}>
        Loading...
      </p>
    );
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px 60px",
          borderRadius: "15px",
          boxShadow: "0px 6px 20px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#1976d2" }}>Home Page</h1>
        {user ? (
          <>
            <p style={{ fontSize: "18px", marginBottom: "30px" }}>
              Welcome, <b>{user.name || user.email}</b> 🎉
            </p>
            <button
              onClick={handleLogout}
              style={{
                padding: "10px 25px",
                fontSize: "16px",
                backgroundColor: "#1976d2",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#1565c0")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#1976d2")}
            >
              Logout
            </button>
          </>
        ) : (
          <p>You are not logged in.</p>
        )}
      </div>
    </div>
  );
}
