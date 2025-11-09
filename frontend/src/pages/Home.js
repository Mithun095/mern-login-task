import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

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
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (res.ok) setUser(data.user);
        else handleLogout();
      } catch {
        alert("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };
    fetchHomeData();
  }, [navigate]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="home-container">
      <h1>Home</h1>
      {user && (
        <>
          <p>
            Welcome, <b>{user.name || user.email}</b> 👋
          </p>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </>
      )}
    </div>
  );
}
