import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };


  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#2c3e50",
      padding: "15px 30px",
      color: "black",
      borderBottom: "3px solid #2980b9",
      boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
    }}>
      <h3 style={{
        margin: 0,
        color: "white",
        fontSize: "20px",
        fontWeight: "600",
        letterSpacing: "1px"
      }}>
        MERN Notes App
      </h3>

      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        {!token ? (
          <>
            <Link
              to="/login"
              style={{
                color: "black",
                textDecoration: "none",
                padding: "8px 14px",
                border: "1px solid transparent",
                borderRadius: "4px",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => e.target.style.background = "#2980b9"}
              onMouseOut={(e) => e.target.style.background = "transparent"}
            >
              Login
            </Link>
            <Link
              to="/register"
              style={{
                color: "black",
                textDecoration: "none",
                padding: "8px 14px",
                border: "1px solid transparent",
                borderRadius: "4px",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => e.target.style.background = "#2980b9"}
              onMouseOut={(e) => e.target.style.background = "transparent"}
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/dashboard"
              style={{
                color: "black",
                textDecoration: "none",
                padding: "8px 14px",
                border: "1px solid transparent",
                borderRadius: "4px",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => e.target.style.background = "#2980b9"}
              onMouseOut={(e) => e.target.style.background = "transparent"}
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              style={{
                background: "#e74c3c",
                border: "none",
                color: "black",
                padding: "8px 14px",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "background 0.3s ease"
              }}
              onMouseOver={(e) => e.target.style.background = "#c0392b"}
              onMouseOut={(e) => e.target.style.background = "#e74c3c"}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
