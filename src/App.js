import React from "react";
import { Link, Route, Routes } from "react-router-dom";
// import Navbar from "./componets/Wellcome/Navbar";
import Wellcomepage from "./componets/Wellcome/WellcomePage";
import HomePage from "./componets/Employee/HomePage";

import Signup from "./componets/Wellcome/Signup";
import Navbar from "./componets/Navbar/Navbar";
import Login from "./componets/Wellcome/Login";
import Landreg from "./componets/Landregandauth/Landreg";
import AdminPage from "./componets/Admin/AdminPage";
import ManageEmp from "./componets/Admin/ManageEmp";
import RegisterEmp from "./componets/Admin/RegisterEmp";
import Employeeprofile from "./componets/Employee/Employeeprofile";

function App() {
  return (
    <>
      {/* <nav>
        <Link to="/navbar">
          <Navbar />
        </Link>
      </nav> */}
      {/* <Navbar /> */}
      <div className="">
        <Routes>
          <Route path="/" element={<Wellcomepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landregistration" element={<Landreg />} />
          <Route path="/employeeprofile" element={<Employeeprofile />} />

          {/* Admin Route */}
          <Route path="/AdminPage" element={<AdminPage />}>
            <Route path="manageEmployee" element={<ManageEmp />} />
            <Route path="registerEmployee" element={<RegisterEmp />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
