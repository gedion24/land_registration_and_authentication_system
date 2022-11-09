import React from "react";
import { Link, Route, Routes } from "react-router-dom";
// import Navbar from "./componets/Wellcome/Navbar";
import Wellcomepage from "./Componets/Wellcome/WellcomePage";
import EmployeeHomePage from "./Pages/Employee/EmployeeHomePage";

import Signup from "./Componets/Wellcome/Signup";
import Navbar from "./Componets/Navbar/Navbar";
import Login from "./Componets/Wellcome/Login";
import Landreg from "./Pages/Employee/Landreg";
import AdminPage from "./Pages/Admin/AdminPage";
import ManageEmp from "./Pages/Admin/ManageEmp";
import RegisterEmp from "./Pages/Admin/RegisterEmp";
import Employeeprofile from "./Pages/Employee/Employeeprofile";
import Employee from "./Pages/Admin/Employee";
import AdminHomePage from "./Pages/Admin/AdminHomePage";
import Updateland from "./Pages/Employee/Updateland";

function App() {
  return (
    <>
      {/* <nav>
        <Link to="/navbar">
          <Navbar />
        </Link>
      </nav> */}
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Wellcomepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/employeehomepage" element={<EmployeeHomePage />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landregistration" element={<Landreg />} />
          <Route path="/employeeprofile" element={<Employeeprofile />} />
          <Route path="/AdminPage" element={<AdminPage />} />
          <Route path="/employees" element={<Employee />} />
          <Route path="/landregistration" element={<Landreg />} />
          <Route path="/updateland" element={<Updateland />} />
          <Route path="/manageEmployee" element={<ManageEmp />} />
          <Route path="/registerEmployee" element={<RegisterEmp />} />
          {/* <Route path="/" element */}

          {/* Admin Route */}

          {/* <Route path="/adminhomepage" element={<AdminHomePage />}>
            <Route index element={<AdminPage />} />
          
         
          </Route> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
