import React, { useContext } from "react";
import { Link } from "react-router-dom";
import '../../styles/table.css'
import { Context } from "../store/appContext";

export default function Settings() {
  const { store, actions } = useContext(Context);

  return (
    //Some html code should go here
    <div className="p-5" id="">
      <div className="card">
        <div className="card-header">
          SETTINGS
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><form className="row g-3">
            <legend><h3>Update Info:</h3></legend>
            <legend><h5>Name:</h5></legend>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">Name:</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">User Info:</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">Phone:</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">E-Mail:</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
          </form>
          </li>
          <li className="list-group-item"><form className="row g-3">
            <legend><h5>Address:</h5></legend>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">Address</label>
              <input type="text" className="form-control" id="inputAddress" />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">Address 2</label>
              <input type="text" className="form-control" id="inputAddress2" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">State</label>
              <select id="inputState" className="form-select">
                <option defaultValue>Choose...</option>
                <option>AL</option>
                <option>AK</option>
                <option>AZ</option>
                <option>AR</option>
                <option>CA</option>
                <option>CO</option>
                <option>CT</option>
                <option>DE</option>
                <option>DC</option>
                <option>FL</option>
                <option>GA</option>
                <option>HI</option>
                <option>ID</option>
                <option>IL</option>
                <option>IN</option>
                <option>IA</option>
                <option>KS</option>
                <option>NY</option>
                <option>KY</option>
                <option>LA</option>
                <option>ME</option>
                <option>MD</option>
                <option>MA</option>
                <option>MI</option>
                <option>MN</option>
                <option>MS</option>
                <option>MO</option>
                <option>MT</option>
                <option>NE</option>
                <option>NV</option>
                <option>NH</option>
                <option>NJ</option>
                <option>NM</option>
                <option>NC</option>
                <option>ND</option>
                <option>OH</option>
                <option>OK</option>
                <option>OR</option>
                <option>PA</option>
                <option>RI</option>
                <option>SC</option>
                <option>SD</option>
                <option>TN</option>
                <option>TX</option>
                <option>UT</option>
                <option>VT</option>
                <option>VA</option>
                <option>WA</option>
                <option>WV</option>
                <option>WI</option>
                <option>WY</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="inputZip/" />
            </div>
          </form>
          </li>
          <legend className="ml-3 mt-3"> <h3>Custom Settings</h3></legend>
          <li className="list-group-item ml-4">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Track Spending -  Allow us to track your spending habits and make suggestions to maximize your savings.</label>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Notifications - Allow us to send you notifications about updates and improved features.</label>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Privacy - Confidentially and anonymously share your activity with us to help us make improvements.</label>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Calendar - Grant access to your calendar to synchronize upcoming payments with your profile.</label>
            </div>
            <div className="col-12 text-end ml-3">
              <button type="submit" className="btn btn-primary">Save</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}