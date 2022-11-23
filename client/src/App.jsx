import React, { useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
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
import Footer from "./Componets/Navbar/Footer";
import EmployeePage from "./Pages/Employee/EmployeePage";
import Ownerprofile from "./Pages/Employee/Ownerprofile";
import Viewmodal from "./Componets/Modal/Viewmodal";
import Setmodal from "./Componets/Modal/Setmodal";
import Modal from "./Componets/Modal/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Wellcomepage />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/employeehomepage" element={<EmployeeHomePage />} /> */}
          <Route path="/footer" element={<Footer />} />

          <Route path="/navbar" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/employeeprofile" element={<Employeeprofile />} />
          <Route path="/AdminPage" element={<AdminPage />} />
          <Route path="/employees" element={<Employee />} />
          <Route path="/landregistration" element={<Landreg />} />
          <Route path="/updateland" element={<Updateland />} />
          <Route path="/manageEmployee" element={<ManageEmp />} />
          <Route path="/registerEmployee" element={<RegisterEmp />} />
          <Route path="/EmployeePage" element={<EmployeePage />} />

          {/* Admin Route */}

          <Route path="/adminhomepage" element={<AdminHomePage />}>
            <Route index element={<AdminPage />} />
            <Route path="registerEmployee" element={<RegisterEmp />} />
            <Route path="employees" element={<Employee />} />
            <Route path="manageEmployee" element={<ManageEmp />} />
          </Route>
          {/* Employye Route */}
          <Route path="/employeehomepage" element={<EmployeeHomePage />}>
            <Route index element={<EmployeePage />} />
            <Route path="employeeprofile" element={<Employeeprofile />} />
            <Route path="landregistration" element={<Landreg />} />
            <Route
              path="ownerprofile"
              element={<Ownerprofile show={isOpen} setShow={setIsOpen} />}
            />
          </Route>
          {/* <Route path="/viewmodal" element={<Viewmodal />}>
            <Route index element={<Modal />} />
            <Route path="setmodal" element={<Setmodal />} />
          </Route> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
