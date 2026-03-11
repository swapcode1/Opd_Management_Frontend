// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// // import AuthLayout from "../components/Authlayout";

// const roleConfig = [
//   { value: "doctor", label: "Doctor" },
//   { value: "receptionist", label: "Receptionist" },
//   { value: "admin", label: "Admin" },
// ];

// const Login = () => {
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   // const [role, setRole] = useState("doctor");
//   // const navigate = useNavigate();

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

//   //   if (!email || !password) {
//   //     alert("Please fill in all fields");
//   //     return;
//   //   }

//   //   // Mock login
//   //   const user = {
//   //     email,
//   //     role,
//   //     name: email.split("@")[0],
//   //   };

//   //   localStorage.setItem("opd_user", JSON.stringify(user));

//   //   alert(`Logged in as ${role}`);
//   //   navigate(`/dashboard/${role}`);
//   // };

//   // return (
//   //   <div class="container d-flex justify-content-center align-items-center min-vh-100">
//   //     <div class="col-md-5 col-lg-4">
//   //       <div class="card login-card">
//   //         <div class="card-header login-header text-center">
//   //           <h4>OPD Patient Login</h4>
//   //         </div>
//   //         <div class="card-body p-4">
//   //           <form>
//   //             <div class="mb-3">
//   //               <label for="opdId" class="form-label">
//   //                 OPD Card Number / Username
//   //               </label>
//   //               <input
//   //                 type="text"
//   //                 class="form-control"
//   //                 id="opdId"
//   //                 placeholder="Enter OPD Number"
//   //                 required
//   //               />
//   //             </div>
//   //             <div class="mb-3">
//   //               <label for="password" class="form-label">
//   //                 Password
//   //               </label>
//   //               <input
//   //                 type="password"
//   //                 class="form-control"
//   //                 id="password"
//   //                 placeholder="Password"
//   //                 required
//   //               />
//   //             </div>
//   //             <div class="mb-3 form-check">
//   //               <input type="checkbox" class="form-check-input" id="remember" />
//   //               <label class="form-check-label" for="remember">
//   //                 Remember Me
//   //               </label>
//   //             </div>
//   //             <div class="d-grid">
//   //               <button type="submit" class="btn btn-primary btn-block">
//   //                 Sign In
//   //               </button>
//   //             </div>
//   //           </form>
//   //         </div>
//   //         <div class="card-footer text-center py-3">
//   //           <a href="#" class="text-muted">
//   //             Forgot Password?
//   //           </a>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   </div>
//   // );

// };

// export default Login;
import React from "react";
import IMG from "../assets/medical-bg.png";
const Login = () => {
  return (
    // <div className="container mt-5">
    //   <div className="row justify-content-center">
    //     <div className="col-md-10">
    //       <div className="card shadow-lg my-5">
    //         <div className="row g-0">
    //           {/* 50% Image Section (visible on md+) */}
    //           <div className="col-md-6 d-none d-md-block">
    //             <img
    //               src={IMG}
    //               alt="OPD Illustration"
    //               className="img-fluid rounded-start h-100"
    //               style={{ objectFit: "cover" }}
    //             />
    //           </div>
    //           {/* 50% Login Form Section */}
    //           <div className="col-md-6">
    //             <div className="card-body p-5">
    //               <h3 className="card-title text-center mb-4">OPD Login</h3>
    //               <form>
    //                 <div className="mb-3">
    //                   <label className="form-label">Email address</label>
    //                   <input type="email" className="form-control" />
    //                 </div>
    //                 <div className="mb-3">
    //                   <label className="form-label">Password</label>
    //                   <input type="password" className="form-control" />
    //                 </div>
    //                 <div className="d-grid">
    //                   <button type="submit" className="btn btn-primary">
    //                     Login
    //                   </button>
    //                 </div>
    //               </form>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row w-100 justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card shadow-lg" style={{ minHeight: "600px" }}>
            <div className="row g-0 h-100">
              {/* Image Section */}
              <div className="col-md-6 d-none d-md-block">
                <img
                  src={IMG}
                  alt="OPD Illustration"
                  className="img-fluid rounded-start h-100 w-100"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Login Section */}
              <div className="col-md-6 d-flex align-items-center">
                <div className="card-body p-5 w-100">
                  <h3 className="text-center mb-4">OPD Login</h3>

                  <form>
                    <div className="mb-3">
                      <label className="form-label">Email address</label>
                      <input type="email" className="form-control" />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input type="password" className="form-control" />
                    </div>

                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
