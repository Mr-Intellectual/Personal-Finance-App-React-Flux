import React from "react";
import { Link } from "react-router-dom";
import '../../styles/index.css'

export default function Navbar() {

  return (



    <nav className="navbar navbar-expand-lg bg-black">
      <div className="container">
        <Link to="/">
          <div className="navbar-brand text-white fs-3" >Home</div>
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" id="navbarIcon" ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto text-center ">
            <Link className="nav-link text-white" to="/dashboard">
              <p className="fs-6 m-0" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                Dashborad
              </p>
            </Link>
            <Link className="nav-link text-white" to="/budgeting">
              <p className="fs-6 m-0" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                Budgeting
              </p>
            </Link>
            <Link className="nav-link text-white" to="/transactions">
              <p className="fs-6 m-0" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                Transactions
              </p>
            </Link>
            <Link className="nav-link text-white" to="/reporting">
              <p className="fs-6 m-0" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                Reporting
              </p>
            </Link>
            <Link className="nav-link text-white" to="/settings">
              <p className="fs-6 m-0" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                Settings
              </p>
            </Link>
            <Link className="nav-link text-white" to="/login">
              <p className="fs-6 m-0" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                Login 
              </p>
            </Link> 
            <Link className="nav-link text-white" to="/signup">
              <p className="fs-6 m-0" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                Sign-Up 
              </p>
            </Link> 
          </div>
        </div>
      </div>



    </nav>

  );
};

