import React from 'react';
import './pageOne.css';
import {Link} from 'react-router-dom';


 class PageOne extends React.Component{

    render(){
        return(
          <div className="page-container">
             <div className="form-container3">
              <p1 className ="logo">LOGO</p1>
               <div>
                <div style={{marginTop:30 , paddingLeft: 20}}>
                   <lable>
                       <h1 className ="welcome">Welcome</h1>
                  </lable>
                </div>

                <div style={{marginTop:30}}>
                   <label className ="text-description">
                       Network management made easy
                   </label>
                </div>
                <div className ="haveAccount" style ={{marginTop:20}}>
                   Already have an account?
               </div>
                <div className ="login-box">
                  <Link to="/login_page"> <button className ="login-button">Login</button></Link>
               </div>
              
               </div>
            </div>



            <div className="form-container4">
               
              <div className ="sign-up">
                Sign Up
              </div>
               
               <div>
                <div style={{marginTop:30}} className ="signup-names">
                   <input type="text" placeholder="First Name" className="text-input"/>
                   <input type="text" placeholder="Last Name" className="text-input"/>

                </div>

                <div style={{marginTop:30}} className ="signup-email">
                   <input type="text" placeholder="Email" className="text-input-email"/>
                   <input type="text" placeholder="Company" className="text-input-company"/>
                </div>

                <div style={{marginTop:30}} className ="signup-names">
                   <input type="password" placeholder="Enter Password" className="text-input"/>
                   <input type="password" placeholder="Confirm Password" className="text-input"/>

                </div>
                <div className ="signup-box">
                  <Link to="/page_one"> <button className ="login-button">SignUp</button></Link>
               </div>
               
               </div>
            </div>
            
            </div>
          
        );
    };

};
export default PageOne;