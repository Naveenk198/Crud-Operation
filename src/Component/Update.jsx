import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import formService from "../Service/formService";
import { Button, Paper, TextField } from "@mui/material";
const Update = () => {
  let { id } = useParams();
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
  useEffect(() => {
    formService
      .getFormById(id)
      .then((res) => {
        setform(res.data);
      })
      .catch((err) => {
        alert("Customer Not Found");
        console.log(err);
      });
  }, [id]);
  let handlechange = (e) => {
    let { name, value } = e.target;
    setform({
      ...form,
      [name]: value,
    });
  };
  let handlesubmit = () => {
    formService.updateForm(id, form).then((res) => {
      setform(form);
      alert("Customer updated successfully!");
      navigate(`/profile/${id}`);
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

export default Update;
