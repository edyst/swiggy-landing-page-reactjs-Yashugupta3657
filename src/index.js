import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Header'
import Header2 from './Components/Header2'
import Header3 from './Components/Header3'
import Footer from './Components/Footer'
import Icons from './Components/Icons'
import Footereend from './Components/Footerend'
ReactDOM.render(
  <>
     <div><Header/></div>
     <div><Header2/></div>
     <div><Header3/></div>
     <div className="sahni">
     <div><Footer  name="Comapany" rang="grey" i="1"/></div>
     <div><Footer  name="Contact" rang="grey" i="2"/></div>
     <div><Footer  name="Legal" rang="grey" i="3"/></div>
     <div><Icons/></div>
     </div>
     <div className="sahni">
     <div><Footer  name="WE DELIVER TO" rang="grey" i="4"/></div>
     <div><Footer  name="-" rang="black" i="4"/></div>
     <div><Footer  name="-" rang="black" i="4"/></div>
     <div><Footer  name="-" rang="black" i="4"/></div>
     </div>
     <div><Footereend/></div>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
