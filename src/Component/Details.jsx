import { Button, Paper, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import formService from "../Service/formService";

const Details = () => {
  let navigate = useNavigate();
  let [form, setform] = useState({
    name: "",
    email: "",
    password: "",
  });

  let paperstyle = {
    width: "400px",
    margin: "20px auto",
    padding: "30px",
  };
  let handlesubmit = () => {
    const Value = Object.values(form).every((val) => String(val).trim() !== "");
    if (!Value) {
      alert("fill the All the field");
    } else {
      formService.saveForm(form).then((res) => {
        setform(res.data);
        alert("Saved Sucessfully");
        navigate(`/profile/${res.data.id}`);
      });
    }
  };

  let handlechange = (e) => {
    let { name, value } = e.target;
    setform({
      ...form,
      [name]: value,
    });
  };
  return (
    <div>
      <Paper style={paperstyle} elevation={8}>
        <h1 style={{ textAlign: "center" }}>Details</h1>
        <TextField
          fullWidth
          label="Name"
          style={{ marginBottom: "20px" }}
          name="name"
          value={form.name}
          onChange={handlechange}
        ></TextField>
        <TextField
          fullWidth
          label="Email"
          style={{ marginBottom: "20px" }}
          name="email"
          value={form.email}
          onChange={handlechange}
        ></TextField>
        <TextField
          fullWidth
          label="Password"
          style={{ marginBottom: "20px" }}
          name="password"
          value={form.password}
          onChange={handlechange}
        ></TextField>
        <Button
          fullWidth
          variant="contained"
          style={{ height: "50px" }}
          onClick={handlesubmit}
        >
          Submit
        </Button>
      </Paper>
    </div>
  );
};

export default Details;
