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

import Table from "./views/table";
import Detials from "./views/details";
import Todo from "./views/todo";

//Components
import Navbar from "./component/navbar";
import Footer from "./component/footer";
// import Sidebar from "./component/sidebar"
import Statusbar from "./component/statusbar";
import Sidebar2 from "./component/sidebar2";
import Statusbar2 from "./component/statusbar2";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const { store, actions } = useContext(Context);


	return (
		<div className="h-100" id="main" >
			<BrowserRouter basename={basename}>
				{/* <Sidebar > */}
				<Sidebar2 >
					<div className="container-xxl hv-100 p-0" id="content">
						<Statusbar />
						{/* <Statusbar2 /> */}
						{/* <Navbar /> */}
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/signup" element={<SignUp />} />
							<Route path="/login" element={<Login />} />
							<Route path="/dashboard" element={<Dashboard />} />
							<Route path="/budgeting" element={<Budgeting />} />
							<Route path="/transactions" element={<Transactions />} />
							<Route path="/reporting" element={<Reporting />} />
							<Route path="/settings" element={<Settings />} />
							<Route path="*" element={<h1>Not found!</h1>} />

							{/* <Route path="/todo" element={<Todo />} />
						<Route path="/table" element={<Table />} />
						<Route path="/detials" element={<Detials />} /> */}
						</Routes>
					</div>
				</Sidebar2>
				{/* </Sidebar> */}
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
