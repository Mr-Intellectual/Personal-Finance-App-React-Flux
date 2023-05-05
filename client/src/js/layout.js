import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Context } from "./store/appContext";


//Views
import Home from "./views/home";
import injectContext from "./store/appContext";
import SignUp from "./views/signUp"
import Login from "./views/login"
import Dashboard from "./views/dashboard"
import Budgeting from "./views/budgeting"
import Transactions from "./views/transactions"
import Reporting from "./views/reporting"
import Settings from "./views/settings"
import Register from "./views/register";
import Myaccount from "./views/myaccount";

//Components
import Footer from "./components/footer";
import Sidebar2 from "./components/sidebar2";




//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const { store, actions } = useContext(Context);


	return (
		<div className="" id="main" >
			<BrowserRouter basename={basename}>
				{/* <Sidebar > */}
				<Sidebar2 >
					<div className="container-xxl hv-100 p-0" id="content">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/signup" element={<SignUp />} />
							<Route path="account" element={<Myaccount />} />
							<Route path="/login" element={<Login />} />
							<Route path="/register" element={<Register />} />
							<Route path="/dashboard" element={<Dashboard />} />
							<Route path="/budgeting" element={<Budgeting />} />
							{/* <Route path="/transactions" element={<Transactions />} /> */}
							<Route path="/reporting" element={<Reporting />} />
							<Route path="/settings" element={<Settings />} />
							<Route path="*" element={<h1>Not found!</h1>} />

						</Routes>
					</div>
				</Sidebar2>
					<Footer />
				{/* </Sidebar> */}
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
