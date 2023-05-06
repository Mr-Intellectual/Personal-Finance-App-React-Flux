import React, { useContext } from "react";
import { Link } from "react-router-dom";
import '../../styles/table.css'
import { Context } from "../store/appContext";

export default function Register() {
    const { store, actions } = useContext(Context);

    return (
        //Some html code should go here
        <div className="container d-flex justify-content-center align-items-center" id="">
            <div className="mt-5 pt-5" style={{ height: "25%", width: "25%" }}>
                <form>
                    <div className="mb-2">
                        <legend className="text-center mt-5">
                            <h1>Registration</h1>
                        </legend>
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address:</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="exampleInputPassword1" className="form-label">Comfrim Password:</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="text-center mt-4">
                    <Link to="/account">
                        <button type="submit" className="col btn btn-primary btn-sm" onClick={() => actions.makeRanDomUser()}>Sign Up</button>
                    </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
