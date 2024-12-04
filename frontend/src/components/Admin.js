import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Admin.css";
import Swal from "sweetalert2";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [isPassword, setIsPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const adminEmail = "admin@example.com";
  const adminPassword = "admin123";
  const toggleInputType = () => {
    setIsPassword(!isPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation
    if (email === "" || password === "") {
      setError("Please fill in both fields.");
      return;
    }

    // Check credentials
    if (email === adminEmail && password === adminPassword) {
      Swal.fire({
        title: "Admin Login",
        text: "SuccessFully Login",
        icon: "success",
      });
      navigate("/admin/dashboard");

      // Redirect to admin dashboard or perform any other action
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <>
    

      <div className="container-fluid loginPage">
        <div className="row ">
          {error && <div className="text-danger">{error}</div>}
          <form onSubmit={handleLogin}>
            {/* <div className="col-12 col-md-6">

          </div> */}
            <div className="offset-md-6 col-12 col-md-6  loginForm ">
              <div className="login_box p-5">
                <div className="mb-3 ">
                  <input
                    type="email"
                    className="form-control"
                    id="staticEmail"
                    placeholder="Username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn login_btn w-100">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Admin;
