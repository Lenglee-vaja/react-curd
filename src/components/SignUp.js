import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  const [department, setDepartment] = useState("");
  const [departmentOptions, setDepartmentOptions] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/departments")
      .then((response) => {
        setDepartmentOptions(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const register = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/register", {
      //   email: email,
      name: name,
      password: password,
    }).then((response) => {
      console.log(response);
      if (response.data.message) {
        setRegisterStatus(response.data.message);
      } else {
        setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
      }
    });
  };
  let imgs = [
    "https://as2.ftcdn.net/v2/jpg/03/39/70/91/1000_F_339709132_H9HSSTtTmayePcbARkTSB2qoZTubJ6bR.jpg",
  ];
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-row">
          <div className="form-column">
            <form>
              <div className="header">
                <div className="lead">ລົງທະບຽນບັນຊີຂອງທ່ານ</div>
              </div>
              <h1 className="status-message">{registerStatus}</h1>
              <div className="form-group">
                <label className="form-label">ຊື່ ເເລະ ນາມສະກຸນ</label>
                <input
                  type="text"
                  className="input"
                  placeholder="ປ້ອນຊື່ເເລະນາມສະກຸນ"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">ເບີໂທ</label>
                <input
                  type="text"
                  className="input"
                  placeholder="ປ້ອມເບີໂທ"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">ລະຫັດຜ່ານ</label>
                <input
                  type="password"
                  className="input"
                  placeholder="ປ້ອນລະຫັດຜ່ານ"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">ທີ່ຢູ່</label>
                <input
                  type="text"
                  className="input"
                  placeholder="ປ້ອນທີ່ຢູ່"
                  onChange={(e) => setPhone(e.target.value)}
                  required={true}
                />
              </div>
              <div className="form-group">
                <label className="form-label">ເລຶອກສາຂາວິຊາຮຽນ</label>
                <select
                  className="input"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option value="">ສາຂາວິຊາຮຽນ</option>
                  {departmentOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="options">
                <div className="checkbox-group">
                  <input className="checkbox-input" type="checkbox" value="" />
                  <label className="checkbox-label">Remember me</label>
                </div>
                <a href="#" className="forgot-password">
                  Forgot password?
                </a>
              </div>
              <button type="submit" className="submit-button">
                ລົງທະບຽນ
              </button>
              {/* <p className="login-prompt">
                Login to your account{" "}
                <a href="login" className="login-link">
                  Login
                </a>
              </p> */}
            </form>
          </div>
        </div>
        <div className="image-column">
          <img
            src={imgs[0]}
            className="form-image"
            alt="Visual Representation"
          />
        </div>
      </div>
    </div>

    // <div className="container" style={{ paddingTop: 60 }}>
    //   <div className="container-fluid h-custom">
    //     <div className="row d-flex justify-content-center align-items-center h-100">
    //       <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
    //         <form>
    //           <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
    //             <p className="lead fw-normal mb-0 me-3">Create Your Account</p>
    //           </div>
    //           <p>
    //             <h1
    //               style={{
    //                 fontSize: "15px",
    //                 textAlign: "center",
    //                 marginTop: "20px",
    //               }}
    //             >
    //               {registerStatus}
    //             </h1>
    //           </p>
    //           <div className="form-outline mb-4">
    //             <input
    //               type="text"
    //               className="form-control form-control-lg"
    //               placeholder="Enter Name"
    //               onChange={(e) => {
    //                 setName(e.target.value);
    //               }}
    //               //   placeholder="Enter your Name"
    //               required
    //             />
    //             <label className="form-label">Name</label>
    //           </div>
    //           <div className="form-outline mb-4">
    //             <input
    //               type="email"
    //               className="form-control form-control-lg"
    //               onChange={(e) => {
    //                 setEmail(e.target.value);
    //               }}
    //               placeholder="Enter your Email Address"
    //               required
    //             />
    //             <label className="form-label">Email address</label>
    //           </div>
    //           <div className="form-outline mb-3">
    //             <input
    //               type="password"
    //               className="form-control form-control-lg"
    //               onChange={(e) => {
    //                 setPassword(e.target.value);
    //               }}
    //               placeholder="Enter your Password"
    //               required
    //             />
    //             <label className="form-label">Password</label>
    //           </div>

    //           <div className="d-flex justify-content-between align-items-center">
    //             <div className="form-check mb-0">
    //               <input
    //                 className="form-check-input me-2"
    //                 type="checkbox"
    //                 value=""
    //               />
    //               <label className="form-check-label">Remember me</label>
    //             </div>
    //             <a href="#" className="text-body">
    //               Forgot password?
    //             </a>
    //           </div>

    //           <div className="text-center text-lg-start mt-4 pt-2">
    //             <button
    //               type="button"
    //               className="btn btn-primary btn-lg"
    //               onClick={register}
    //             >
    //               Sign Up
    //             </button>
    //             <p className="small fw-bold mt-2 pt-1 mb-0">
    //               Login to your account{" "}
    //               <a href="login" className="link-danger">
    //                 Login
    //               </a>
    //             </p>
    //           </div>
    //         </form>
    //       </div>
    //       <div className="col-md-9 col-lg-6 col-xl-5">
    //         <img src={imgs[0]} className="img-fluid" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SignUp;
