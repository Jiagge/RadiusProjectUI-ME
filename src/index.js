import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch,Link, BrowserRouter} from 'react-router-dom';

//@ts-ignore
import LoginPage from './loginPage';
import PageOne from './pageOne';
import nav from './nav';
import Nav from './nav';




const App  = function(){
    return(
       <div>
           <Router>
           
          <Nav/>
           <Switch>
               <Route path ="/login_page" component= {LoginPage}/>
               <Route path ="/page_one" component= {PageOne}/>
           </Switch>

           </Router>
           
 
      </div>
        
    );
    
};


ReactDOM.render(<App/>, document.querySelector('#root'));
    