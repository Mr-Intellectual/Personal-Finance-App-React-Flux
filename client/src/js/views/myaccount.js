import React, { useContext } from "react";
import { Link } from "react-router-dom";
import '../../styles/account.css'
import { Context } from "../store/appContext";

export default function Myaccount() {
    const { store, actions } = useContext(Context);
    // console.log(store)

    return (
        //Some html code should go here
        <div className="container d-flex justify-content-center align-items-center my-5" id="">
            <div className="container emp-profile">
                <div className="col-12 text-end ml-3">
                    <button type="submit" className="btn btn-primary btn-sm" onClick={() => actions.makeRanDomUser()}>Click</button>
                </div>
                <form method="post">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img src={store.user[0]["about"][0]["picLink"] ? store.user[0]["about"][0]["picLink"] : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>
                                    {`${store.user[0]["about"][0]["Name"]["First Name"]} ${store.user[0]["about"][0]["Name"]["Last Name"]}`}
                                </h5>
                                <h6>
                                    SSN: {store.user[0]["about"][0]["SSN"]}
                                </h6>
                                <h6>
                                    Credit Score: {store.user[0]["about"][0]["Credit Score"]}
                                </h6>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <Link className="nav-link" to="/settings">
                                <p>Edit Profile</p>
                            </Link>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col my-2">
                            <h4>About:</h4>
                        </div>
                        <div className="col-md-12">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label>User Id:</label>
                                        </div>
                                        <div className="col-md-4">
                                            <p>{store.user[0]["about"][0]["User ID"]}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label>Name:</label>
                                        </div>
                                        <div className="col-md-4">
                                            <p>{`${store.user[0]["about"][0]["Name"]["First Name"]} ${store.user[0]["about"][0]["Name"]["Last Name"]}`}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label>Sex:</label>
                                        </div>
                                        <div className="col-md-4">
                                            <p>{store.user[0]["about"][0]["Sex"]}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label>Address:</label>
                                        </div>
                                        <div className="col-md-4">
                                            <p>{store.user[0]["about"][0]["Address"]}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label>Email:</label>
                                        </div>
                                        <div className="col-md-4">
                                            <p>{store.user[0]["about"][0]["E-mail"]}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label>Phone:</label>
                                        </div>
                                        <div className="col-md-4">
                                            <p>{store.user[0]["about"][0]["Phone"]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
