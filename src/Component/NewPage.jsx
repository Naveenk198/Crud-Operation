import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NewPage = () => {
  let navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20%",
      }}
    >
      <Button
        variant="contained"
        style={{
          width: "200px",
        }}
        onClick={() => navigate("/details")}
      >
        ADD
      </Button>
    </div>
  );
};

export default NewPage;
