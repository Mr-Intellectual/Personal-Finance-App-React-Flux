import React, { useContext} from "react";
import { Link } from "react-router-dom";
import '../../styles/table.css'
import { Context } from "../store/appContext";

export default function Settings() {
  const { store, actions } = useContext(Context);

  return (
    //Some html code should go here
    <div className="" id="">
<div class="card">
  <div class="card-header">
    SETTINGS
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><form class="row g-3">
      <legend><h3>Update Address</h3></legend>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option selected>Choose...</option>
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
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip/"/>
  </div>
  <div class="col-12 text-end">
    <button type="submit" class="btn btn-primary">Save</button>
  </div>
</form>
</li>
<legend class="ml-3 mt-3"> <h3>Custom Settings</h3></legend>
<li class="list-group-item ml-4">
    <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Track Spending -  Allow us to track your spending habits and make suggestions to maximize your savings.</label>
</div>
    <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Notifications - Allow us to send you notifications about updates and improved features.</label>
</div>
    <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Privacy - Confidentially and anonymously share your activity with us to help us make improvements.</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Calendar - Grant access to your calendar to synchronize upcoming payments with your profile.</label>
</div>
<div class="col-12 text-end ml-3">
    <button type="submit" class="btn btn-primary">Save</button>
  </div>
    </li>
  </ul>
</div>
    </div>
  );
}
