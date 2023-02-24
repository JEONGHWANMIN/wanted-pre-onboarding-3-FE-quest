import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const { authConfig } = useAuth();
  const navigate = useNavigate();

  return (
    <div
      style={{
        border: "solid 1px red",
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          cursor: "pointer",
        }}
        onClick={() => {
          authConfig({
            userId: 1,
            username: "hwanmin",
            auth: true,
            token: "#asdasdasdsad",
          });
          navigate("/page2");
        }}
      >
        Loing GoGO
      </div>
    </div>
  );
}

export default Login;
