import React ,{Component } from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
//import AuthenticatedRoute from  './AuthenticationRoute.jsx'
import { withRouter } from 'react-router';
class HeaderComponent extends Component{
    render(){
            
             const isuserd=AuthenticationService.isLogout();
             const user=AuthenticationService.userName();
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.google.com">MORE Info</a></div>
                    <ul className="navbar-nav">
                        {isuserd && <li><Link className="nav-link" to="/welcome/rajumehta">Home</Link></li>}
                        {isuserd &&<li><Link className="nav-link"to="/todo">TODO</Link></li>}
                        {isuserd &&<li><Link className="nav-link"to="/add">ADD_TODO</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                   {!isuserd &&<li><Link className="nav-link" to="/login">Login</Link></li>}
                   {!isuserd &&<li><Link className="nav-link" to="/Sinup">Sign Up</Link></li>}
                   {isuserd &&<div className="nav-link">{user}</div>}
                   {isuserd && <li><Link  className="nav-link" to="/logout" onClick={AuthenticationService.logout} >Logout</Link></li>}
                    </ul>
                </nav>
            </header>      
        
        )
    }
}
export default withRouter(HeaderComponent);