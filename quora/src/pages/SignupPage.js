// import React, { useState } from "react";
// import "./SignupPage.css";
// import axios from "axios";

// function RegisterModal({ isOpen, onClose }) {
//   const [localUsername, setLocalUsername] = useState("");
//   const [localEmail, setLocalEmail] = useState("");
//   const [localPassword, setLocalPassword] = useState("");
//   const [state, setState] = useState(false);
//   const [error, setError] = useState(false);

//   if (!isOpen) return null;

//   const handleSubmit = async (e) => {
    
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/register/", {
//         username: localUsername,
//         email: localEmail,
//         password: localPassword,
//       });
//       // res.data && window.location.replace("/login");
//     } catch (err) {
//       setError(true);
//     }
//   };

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-container" onClick={(e) => e.stopPropagation()}>
//         <button className="modal-close" onClick={onClose}>
//           X
//         </button>
//         <h2>Sign up</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Username</label>
//             <input
//               type="text"
//               id="name"
//               placeholder="What would you like to be called?"
//               onChange={(e) => setLocalUsername(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Your email"
//               onChange={(e) => setLocalEmail(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Your password"
//               onChange={(e) => setLocalPassword(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="submit-button">
//             submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default RegisterModal;


import React, { useState } from "react";
import "./LoginPage.css";
// import RegisterModal from './SignupPage.js';
import axios from "axios"
import { Link } from "react-router-dom";

export default function LoginPage({}) {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login")
    } catch(err) {
      setError(true) 
    }
  }
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  // const [page,setPage] = useState('Login');

  // const handleSignUp = async(e) => {
  //   e.preventDefault();
  //   setPage("SignUp");

  // };
  // {page === "Login" ? "fullScreenBackground" : "ScreenBackground"}
  return (
    <>
      <div className = "ScreenBackground">
        <div
          style={{
            backgroundColor: "rgba(38, 38, 38, 1)",
            width: "50%",
            height: "80%",
          }}
        >
          {console.log(username)}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              style={{ color: "#f52936", fontSize: "50px", fontWeight: "bold" }}
            >
              Quora
            </h1>
            <p
              style={{
                color: "#e6e7e8",
                fontSize: "15px",
                fontWeight: "bold",
                marginTop: "-20px",
              }}
            >
              A place to share knowledge and better understand the world
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "100%",
                height: "300px",
                marginTop: "10px",
              }}
            >
              <div style={{ width: "50%" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    padding: "15px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                      color: "rgba(177, 179, 182, 1)",
                    }}
                  >
                    By continuing you indicate that you agree to <br></br>
                    Quora’s Terms of Service and Privacy Policy.
                  </p>
                  <form
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                    }}
                    // onSubmit={handleSignUp}
                  >
<button
                      style={{
                        color: "white",
                        backgroundColor: "transparent",
                        width: "100%",
                        borderRadius: "50px",
                        cursor: "pointer",
                        border: "1px solid white"
                      }}
                      type="button"
                      // onClick={openModal}
                    >
                      <Link to={"/login"}>Login</Link>                    </button>
                    {/* <RegisterModal isOpen={isModalOpen} onClose={closeModal} /> */}
                  </form>
                </div>
              </div>
              <div
                style={{
                  border: "1px solid rgba(57, 56, 57, 1)",
                  width: "50%",
                  borderTop: "hidden",
                  borderRight: "hidden",
                  borderBottom: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    padding: "15px",
                  }}
                >
                  <form
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                    onSubmit={handleSubmit}
                  >
                    <div
                      style={{
                        border: "1px solid rgba(57, 56, 57, 1)",
                        paddingBottom: "5px",
                        borderTop: "hidden",
                        borderLeft: "hidden",
                        borderRight: "hidden",
                        fontWeight: "500",
                        fontSize: "15px",
                      }}
                    >
                      SignUp
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "20px",
                      }}
                    >
                      <label
                        htmlFor="username"
                        style={{ color: "#e6e7e8", fontSize: "13px" }}
                      >
                        <b>Username</b>
                      </label>
                      <input
                        type="text"
                        id="username"
                        placeholder="Your username"
                        required
                        style={{
                          backgroundColor: "rgba(24, 24, 24 ,1)",
                          border: "1px solid rgba(57, 56, 57, 1)",
                          padding: "13px",
                          fontSize: "15px",
                          marginTop: "6px",
                          color: "white"
                        }}
                        onChange={e=>setUsername(e.target.value)}
                      ></input>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "20px",
                      }}
                    >
                      <label
                        htmlFor="email"
                        style={{ color: "#e6e7e8", fontSize: "13px" }}
                      >
                        <b>Email</b>
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Your email"
                        required
                        style={{
                          backgroundColor: "rgba(24, 24, 24 ,1)",
                          border: "1px solid rgba(57, 56, 57, 1)",
                          padding: "13px",
                          fontSize: "15px",
                          marginTop: "6px",
                          color: "white"
                        }}
                        onChange={e=>setEmail(e.target.value)}
                      ></input>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "20px",
                      }}
                    >
                      <label
                        htmlFor="Password"
                        style={{ color: "#e6e7e8", fontSize: "13px" }}
                      >
                        <b>Password</b>
                      </label>
                      <input
                        type="password"
                        id="password"
                        placeholder="Your password"
                        style={{
                          backgroundColor: "rgba(24, 24, 24 ,1)",
                          border: "1px solid rgba(57, 56, 57, 1)",
                          padding: "13px",
                          fontSize: "15px",
                          marginTop: "6px",
                          color: "white"
                        }}
                        onChange={e=>setPassword(e.target.value)}
                      ></input>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginTop: "20px",
                        }}
                      >
                        <p
                          style={{
                            color: "rgba(177, 179, 182, 1)",
                            fontSize: "13px",
                          }}
                        >
                          
                        </p>
                        <button
                          style={{
                            backgroundColor: "#275293",
                            borderRadius: "30px",
                            padding: "10px",
                            color: "white",
                            width: "90px",
                            border: "none",
                            cursor: "pointer"
                          }}
                          type="submit"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* <div
              style={{
                border: "1px solid rgba(57, 56, 57 ,1)",
                width: "100%",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "13px",
                color: "#d5d6d6",
                borderBottom: "hidden",
              }}
            >
              New: العربية, עברית, polski, ગુજરાતી, ಕನ್ನಡ, മലയാളം and తెలుగు
            </div> */}
            {/* <div
              style={{
                border: "1px solid rgba(57, 56, 57, 1)",
                width: "100%",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "13px",
                color: "#d5d6d6",
                backgroundColor: "rgba(24, 24, 24 ,1)",
              }}
            >
              AboutCareersPrivacyTermsContactLanguagesYour Ad ChoicesPress©
              Quora, Inc. 2024
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
