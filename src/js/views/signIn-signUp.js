import React, { useContext} from "react";
import { Link } from "react-router-dom";
import '../../styles/table.css'
import { Context } from "../store/appContext";

export default function UserAuth() {
  const { store, actions } = useContext(Context);

  return (
    //Some html code should go here
    <div className="container" id="">
    <form class="row g-3">
    <legend className="text-center mt-5">
         <h1>SIGN UP</h1>
       </legend>
 <div class="col-md-6">
   <label for="inputEmail4" class="form-label">Email</label>
   <input type="email" class="form-control" id="inputEmail4"/>
 </div>
 <div class="col-md-6">
   <label for="inputPassword4" class="form-label">Password</label>
   <input type="password" class="form-control" id="inputPassword4"/>
 </div>
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
   <input type="text" class="form-control" id="inputZip"/>
 </div>
 <div class="col-12">
   <button type="submit" class="btn btn-primary">Sign Up</button>
 </div>
</form>

<form>
 <div class="mb-3">
 <legend className="text-center mt-5">
         <h1>SIGN IN</h1>
       </legend>
   <label for="exampleInputEmail1" class="form-label">Email address</label>
   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
 </div>
 <div class="mb-3">
   <label for="exampleInputPassword1" class="form-label">Password</label>
   <input type="password" class="form-control" id="exampleInputPassword1"/>
 </div>
 <button type="submit" class="btn btn-primary">Sign In</button>
 <div class="form-check mt-3">
 <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
 <label class="form-check-label" for="flexCheckDefault">
   Remember me
 </label>
</div>
</form>
   </div>
 );
}
