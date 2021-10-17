import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios"
const Login = () => {
   let history = useHistory();

   const handleClick = async (e) => {
      e.preventDefault();

      let email = e.target.elements.email?.value;
      let password = e.target.elements.password?.value;
      const params = {
         email : email,
         password: password
      }
      let resp = await axios.post('http://localhost:4000/users/login', params);
      const {name, token, role, id} = resp.data
      localStorage.setItem('token', token)
      localStorage.setItem('role', 'user')
      localStorage.setItem('name', name)
      localStorage.setItem('id', id)
      history.push('/')
   }
   return (
      <div className="authincation h-100 p-meddle">
         <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
               <div className="col-md-6">
                  <div className="authincation-content">
                     <div className="row no-gutters">
                        <div className="col-xl-12">
                           <div className="auth-form">
                              <h4 className="text-center mb-4">
                                 Sign in your account
                              </h4>
                              <form
                                 
                                 onSubmit={handleClick}
                              >
                                 <div className="form-group">
                                    <label className="mb-1">
                                       <strong>Email</strong>
                                    </label>
                                    <input
                                       type="email"
                                       className="form-control"
                                       placeholder="hello@example.com"
                                       name="email"
                                    />
                                 </div>
                                 <div className="form-group">
                                    <label className="mb-1">
                                       <strong>Password</strong>
                                    </label>
                                    <input
                                       type="password"
                                       className="form-control"
                                       placeholder="Password"
                                       name="password"
                                    />
                                 </div>
                                 <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                    <div className="form-group">
                                       <div className="custom-control custom-checkbox ml-1">
                                          <input
                                             type="checkbox"
                                             className="custom-control-input"
                                             id="basic_checkbox_1"
                                          />
                                          <label
                                             className="custom-control-label"
                                             htmlFor="basic_checkbox_1"
                                          >
                                             Remember my preference
                                          </label>
                                       </div>
                                    </div>
                                    <div className="form-group">
                                       <Link to="/page-forgot-password">
                                          Forgot Password?
                                       </Link>
                                    </div>
                                 </div>
                                 <div className="text-center">
                                    <button
                                       type="submit"
                                       className="btn btn-primary btn-block"
                                    > submit
                                       </button>
                                 </div>
                              </form>
                              <div className="new-account mt-3">
                                 <p>
                                    Don't have an account?{" "}
                                    <Link
                                       className="text-primary"
                                       to="/page-register"
                                    >
                                       Sign up
                                    </Link>
                                 </p>
                              </div>
                           </div>
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
