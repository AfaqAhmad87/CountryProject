import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

function About() {
  const navigate = useNavigate();
  function go() {
    navigate("/Home");
  }

  return (
    <div className="h1">
      <h1 style={{ textAlign: "center" }}>
        Navigate to see Whole Countries Data
      </h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button type="primary" onClick={go}>
          Navigate
        </Button>
      </div>
    </div>
  );
}

export default About;
