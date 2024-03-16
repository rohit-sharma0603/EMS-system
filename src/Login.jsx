
import { useState } from "react";
import hrImage from "./assets/hr.png.png";

export default function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  function createNameValue(e){
    const nameValue=e.target.value 

    props.setCreatedName(nameValue)
  }
  function toggleCreateAccount() {
    setShowCreateAccount(!showCreateAccount);
  }

  function getUserName(e) {
    const newUserName = e.target.value;
    setUserName(newUserName);
    props.addUserName(newUserName);
  }

  function getPassword(e) {
    const newPassword = e.target.value;
    setPassword(newPassword);
    props.addPasswordValue(newPassword);
  }

  return (
    <>
      {!showCreateAccount ? (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card border-0 rounded-3 shadow-lg">
                <div className="card-body p-5">
                  <h2 className="card-title text-center mb-4">Log In</h2>
                  <form>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        id="username"
                        className="form-control"
                        value={userName}
                        onChange={getUserName}
                        placeholder="Enter ID"
                      />
                      <label htmlFor="username">User ID</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={getPassword}
                        placeholder="Enter Password"
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary btn-block mt-4"
                      onClick={props.logIn}
                    >
                      Log In
                    </button>
                  </form>
                  <p
                    onClick={toggleCreateAccount}
                    className="text-center mt-3"
                    style={{ cursor: "pointer" }}
                  >
                    New User? Create Account
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card border-0 rounded-3 shadow-lg">
                <div className="card-body p-5">
                  <h2 className="card-title text-center mb-4">
                    Create Account
                  </h2>
                  <form>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Enter Name"
                        onChange={createNameValue}
                      />
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter Email"
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        id="newPassword"
                        className="form-control"
                        placeholder="Enter Password"
                      />
                      <label htmlFor="newPassword">Password</label>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary btn-block mt-4"
                    >
                      Create Account
                    </button>
                  </form>
                  <p
                    onClick={toggleCreateAccount}
                    className="text-center mt-3"
                    style={{ cursor: "pointer" }}
                  >
                    Already have an account? Log In
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
