import React, { useContext } from "react";
import { Link } from "react-router-dom";
import '../../styles/table.css'
import { Context } from "../store/appContext";

export default function Login() {
  const { store, actions } = useContext(Context);

  return (
    //Some html code should go here
    <div className="container d-flex justify-content-center align-items-center" id="">
      <div className="mt-5 pt-5" style={{ height: "25%", width: "25%" }}>
        <form>
          <div className="mb-3">
            <legend className="text-center mt-5">
              <h1>SIGN IN</h1>
            </legend>
            <label htmlFor="exampleInputEmail1" className="form-label">Email address:</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>

          <div className="row">
            <div className="col-6">
              <Link to="/">
                <button type="submit" className="col-7 btn btn-primary btn-sm" >Sign In</button>
              </Link>
            </div>
            <div className="col-6 form-check my-1 p-0">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}
