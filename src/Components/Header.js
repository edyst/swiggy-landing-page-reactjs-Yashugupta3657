import react,{useState,useEffect} from "react";
import './Header.css';
import Animation from "./Animation";
var div=document.createElement("div")
function check(){
    var divi=document.getElementById("appending")
    if(document.getElementById("inputt").value==""&&(div.classList.contains("trip1")!=true))
    {
        div.innerText="Please Enter your delivery location !!";
        div.classList.add("trip1")
        divi.appendChild(div)
    }
    else if(document.getElementById("inputt").value!="" && div.classList.contains("trip1")==true)
    {
        div.classList.remove("trip1")   
        divi.removeChild(div)
    }
    console.log(divi)
}
function Header(){
let text=["Game night?","Cooking Gone Wrong?","Late night at office?","Movie marathon?","Unexpected guests?","Hungry?"]
const[change,setChange]=useState(text[0]);
useEffect(()=>{
    help();
},[])
function help(){
    var i=0;
        setInterval(
        ()=>{
            if(i==6)
            {
                i=0;
            }
        if(i<6){
           setChange(text[i]);
           i++;
        }},2000)
}
 return(
     <>
     <div className="split">
     <div className="left">
     <div className="check0">
     <div><img src="https://d1ye2ocuext585.cloudfront.net/images/s/Swiggy_Logo_9.png"/></div>
     <div className="hing">
         <div><button id="login">Login</button></div>
         <div><button id="signup">Sign up</button></div>
     </div>
     </div>
     {/* <div><h1 className="chin">{change}</h1></div> */}
     {/* <div><h2 class="attr">Order food from favourite restaurants near you.</h2></div> */}
      <Animation/>
     <div className="trip" id="appending">
     <div className="check">
     <input className="chinu" id="inputt" type="text" placeholder="Enter your delivery location"/>
     <button className="posey"><i class="far fa-location"/> Locate Me</button>
     <button onClick={check} id="changing">FIND FOOD</button>
     </div>
     </div>
 
     <div>
     <h3>POPULAR CITIES IN INDIA</h3>
     <div style={{ paddingRight: "15px" }} className="popular alterflex">
          <div>Ahemdabad</div>
          <div>Bangalore</div>
          <div>Chennai</div>
          <div> Delhi</div>
          <div>Gurgaon</div>
          <div> Hydreabad</div>
          <div>Kolkata</div>
          <div> Mumbai</div>
          <div> Pune &</div>
          <div> more.</div>
        </div>
     </div>
     </div>

     <div className="right">
         <img style={{width:"630px",height:"100%"}} src="https://web.archive.org/web/20210903175246im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq"/>
     </div>
     </div>
     </>
 )
};
export default Header