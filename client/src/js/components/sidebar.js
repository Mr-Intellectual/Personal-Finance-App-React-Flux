import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Logo, ExpenseIcon, DownIcon, ChartsIcon, CommentsIcon, BudgetIcon, HomeIcon, AppearanceIcon, ReportingIcon, SettingsIcon, OptionsIcon, CollapseIcon, SearchIcon } from "../../img/svgSymbols"
import "../../styles/sidebar.css";
import { Context } from "../store/appContext";

export default function sideBar({ children }) {
    const { store, actions } = useContext(Context);
    return (<div className="row h-100">
        <header className="col-sm-12 col-md-2 page-header pt-5 ">
            <nav>
                <Link className="nav-link logo" to="/login">
                    {/* <a aria-label="forecastr logo" className="logo"> */}
                        <Logo />
                    {/* </a> */}
                </Link>

                <button className="toggle-mob-menu" aria-expanded="false" aria-label="open menu">
                    <DownIcon />
                </button>

                <ul className="admin-menu">
                    <li className="menu-heading">
                        <h3>Sidebar Menu</h3>
                    </li>
                    <li>
                        <Link className="nav-link text-white" to="/dashboard">
                            <HomeIcon />
                            <span className="fs-6 m-0" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                                Home
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link text-white" to="/transactions">
                            <ExpenseIcon />
                            <span className="fs-6 m-0" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                                Expenses
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link text-white" to="/reporting">
                            <ReportingIcon />
                            <span className="fs-6 m-0" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                                Reporting
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link text-white" to="/reporting">
                            <BudgetIcon />
                            <span className="fs-6 m-0" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                                Budgeting
                            </span>
                        </Link>
                    </li>
                    <li className="menu-heading">
                        <h3>Settings</h3>
                    </li>
                    <li>
                        <Link className="nav-link text-white" to="/settings">
                            <SettingsIcon />
                            <span className="fs-6 m-0" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                                Settings
                            </span>
                        </Link>
                    </li>
                    <li>
                        <a href="#0">
                            <OptionsIcon />
                            <span>Options</span>
                        </a>
                    </li>
                    <li>
                        <div className="switch">
                            <input type="checkbox" id="mode" defaultChecked onClick={() => actions.toggleLightDark()} />
                            <label htmlFor="mode">
                                <span></span>
                                <span>Dark</span>
                            </label>
                        </div>
                        {/* <button className="collapse-btn" aria-expanded="true" aria-label="collapse menu" onClick={() => actions.toggleCollapse()}>
                            <CollapseIcon />
                            <span>Collapse</span>
                        </button> */}
                    </li>
                </ul>
            </nav>
        </header>
        <main className="col-10 p-0">{children}</main>
    </div>
    );
}
