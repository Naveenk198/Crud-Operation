import "./App.css";
import { Button } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NewPage from "./Component/NewPage";
import Details from "./Component/Details";
import Profile from "./Component/Profile";
import Update from "./Component/Update";
import Delete from "./Component/Delete";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewPage />}></Route>
        <Route path="/details" element={<Details />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </Router>
  );
}

export default App;
