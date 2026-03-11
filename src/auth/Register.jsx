// import React from "react";

// function Register() {
//   return (
//     <>
//       <div data-mdb-input-init className="form-outline mb-4">
//         <input
//           type="text"
//           id="form2Example18"
//           className="form-control form-control-lg"
//         />
//         <label className="form-label" htmlfor="form2Example18">
//           Name
//         </label>
//       </div>

//       <div data-mdb-input-init className="form-outline mb-4">
//         <input
//           type="email"
//           id="form2Example18"
//           className="form-control form-control-lg"
//         />
//         <label className="form-label" htmlfor="form2Example18">
//           Email
//         </label>
//       </div>
//       <div data-mdb-input-init className="form-outline mb-4">
//         <input
//           type="password"
//           id="form2Example18"
//           className="form-control form-control-lg"
//         />
//         <label className="form-label" htmlfor="form2Example18">
//           Password
//         </label>
//       </div>
//       <div data-mdb-input-init className="form-outline mb-4">
//         <input
//           type="text"
//           id="form2Example18"
//           className="form-control form-control-lg"
//         />
//         <label className="form-label" htmlfor="form2Example18">
//           specialization
//         </label>
//       </div>

//       <div data-mdb-input-init className="form-outline mb-4">
//         <input
//           type="password"
//           id="form2Example28"
//           className="form-control form-control-lg"
//         />
//         <label className="form-label" htmlfor="form2Example28">
//           Password
//         </label>
//       </div>

//       <div className="pt-1 mb-4">
//         <button
//           data-mdb-button-init
//           data-mdb-ripple-init
//           className="btn btn-info btn-lg btn-block"
//           type="button"
//         >
//           Login
//         </button>
//       </div>
//     </>
//   );
// }

// export default Register;
import React from "react";
import IMG from "../assets/medical-bg.png";
const Register = () => {
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
                      <label className="form-label">Name</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email address</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Specialization</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Clinic name</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Qualification</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Mobile no</label>
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
export default Register;
