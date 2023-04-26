import React, { useContext } from "react";
import { Link } from "react-router-dom";
import '../../styles/table.css'
import { Context } from "../store/appContext";

export default function Login() {
  const { store, actions } = useContext(Context);

  return (
    //Some html code should go here
    <div className="container" id="">
      <form>
        <div class="mb-3">
          <legend className="text-center mt-5">
            <h1>SIGN IN</h1>
          </legend>
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" class="btn btn-primary">Sign In</button>
        <div class="form-check mt-3">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label class="form-check-label" for="flexCheckDefault">
            Remember me
          </label>
        </div>
      </form>
    </div>
  );
}
