import React from "react";
import { Link } from "react-router-dom";
import '../../styles/index.css'

export default function Navbar () {

	return (  


		
	<nav className="navbar navbar-expand-lg bg-body-tertiary bg-black">
    <div className="container">
		
	<Link to="/">
	<div className="navbar-brand text-white">Start Bootstrap</div>

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
			<Link  className="nav-link text-white" to="/">
				Home
			</Link>
			<Link  className="nav-link text-white" to="/todo">
				Todo-list
			</Link>
			<Link  className="nav-link text-white" to="/table">
				Table
			</Link>
      <Link  className="nav-link text-white" to="/detials">
				Details
			</Link>
            </div>
          </div>
    </div>


	
  </nav>
  
  );
};

