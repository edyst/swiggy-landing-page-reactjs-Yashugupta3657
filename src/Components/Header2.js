import './Header2.css'
function Card(props){
    return(
        <>
    <div className="car">
    <div><img style={{width:props.widthy,height:props.heighty}} src={props.imgsrc}/></div>
     <div><h3>{props.texty}</h3></div>
     <div><p>{props.para}</p></div>
    </div>
    </>
    )
}
function Header2(){ 
    return(
       <div className="two">
          <Card imgsrc="https://web.archive.org/web/20210903175337im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"
          widthy="105px" heighty="199px" texty="No Minimum Order" para="Order in for yourself or for the group, with no restrictions on order value"
          />
          <Card imgsrc="https://web.archive.org/web/20210903175338im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"
          widthy="112px" heighty="206px" texty="Live Order Tracking" para="Know where your order is at all times, from the restaurant to your doorstep"
          />
          <Card imgsrc="https://web.archive.org/web/20210903175339im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"
          widthy="124px" heighty="188px" texty="Lightning-Fast Delivery" para="Experience Swiggy's superfast delivery for food delivered fresh & on time
          "
          />
       </div>
    );
};
export default Header2;