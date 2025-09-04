import { useState, useEffect } from "react";
import { Button, Paper } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import formService from "../Service/formService";

const Profile = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  let [form, setform] = useState({
    name: "",
    email: "",
    password: "",
  });
  let handledelete = () => {
    formService
      .deleteForm(id)
      .then((res) => {
        alert("Your id is deleted sucessfully");
        navigate("/details");
        setform({
          name: "",
          email: "",
          password: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let handleupdate = () => {
    navigate(`/update/${id}`);
  };
  useEffect(() => {
    formService
      .getFormById(id)
      .then((res) => {
        setform(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  let paperstyle = {
    width: "400px",
    margin: "20px auto",
    padding: "30px",
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <Paper style={paperstyle} elevation={9}>
        <h1 style={{ textAlign: "center" }}>Profile</h1>
        <h1>
          Name: <strong>{form.name}</strong>{" "}
        </h1>
        <h1>
          Email: <strong>{form.email}</strong>{" "}
        </h1>
        <h1>
          Password: <strong>{form.password}</strong>{" "}
        </h1>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Button variant="contained" onClick={handleupdate}>
            Edit
          </Button>
          <Button variant="contained" onClick={handledelete}>
            Delete
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default Profile;
