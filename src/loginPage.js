import React from 'react';
import './loginPage.css';
import {Link} from 'react-router-dom';

class LoginPage extends React.Component{
    render(){

        return(
        <div className="page-container">
            <div className="form-container">
               
               <div>
                <div style={{marginTop:30}}>
                   <input type="text" placeholder="Username" className="text-input"/>
                </div>

                <div style={{marginTop:30}}>
                   <input type="password" placeholder="********" className="text-input"/>
                </div>
                <div>
                  <Link to="/menu_page"> <button className ="login-button">Login</button></Link>
               </div>
               <div className ="forget-password" style ={{marginTop:20}}>
                   <Link to="/forgetpass_page"  >Forget Password</Link>
               </div>
               </div>
            </div>



            <div className="form-container2">
               <div>
                <div style={{marginTop:30 , paddingLeft: 20}}>
                   <lable>
                       <h1 className ="helloFriends">Hello, Friends</h1>
                  </lable>
                </div>

                <div style={{marginTop:30}}>
                   <label className ="text-description">
                       Network management made easy.
                      
                   </label>
                </div>
                <div>
                  <Link to="/page_one"> <button className ="signup-button">Sign Up</button></Link>
               </div>
              
               </div>
            </div>


            
        </div>
        )
    }
}
export default LoginPage;
