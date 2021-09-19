
const Footer=(props)=>{

    if((props.i)=="1")
    var footer=["About us","Team","Careers","Swiggy Blog","Bug Bounty","Swiggy Super","Swiggy Corporate","Swiggy Instamart"];
    if((props.i)=="2")
    var footer=["Help & Support","Partner with us","Ride with us"];
    if((props.i)=="3")
    var footer=["Terms & Conditions","Refund & Cancellation","Privacy Policy","Cookie Policy","Offer Terms","Phishing & Fraud"];
    if((props.i)=="4")
    var footer=["Terms & Conditions","Refund & Cancellation","Privacy Policy","Cookie Policy","Offer Terms","Phishing & Fraud"];
    
    const foot=footer.map((item,index)=>{
    return (
        <a className="links" href="#"><li style={{paddingTop:'9px',paddingBottom:"9px",paddingRight:"9px",listStyle:"none"}}>{footer[index]}</li></a>
    )
    })
    return (
        <>
        <div>
        <h4 style={{color:`${props.rang}`}}>{props.name}</h4>
    <ul style={{padding:'0px'}}>{foot}</ul>
    </div>
        </>
    )
    }
    export default Footer;



