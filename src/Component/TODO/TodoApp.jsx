import React ,{Component } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AuthenticatedRoute from  './AuthenticationRoute.jsx'
import LoginComponent from './LoginComponent'
import LogoutComponent from './LogoutComponent'
import WelcomeComponent from './WelcomeComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import TodoComponent from './TodoComponent'
import addTodoComponent from './addTodoComponent'
import updateTodoComponent from './updateTodoComponent'
import SinupComponent from './SinupComponent'
 
class TodoApp extends Component{
    render()
    {
        return(
            <div className="TOdoApp">
                <Router>
                <HeaderComponent/> 
                       <Switch>
                        <Route path="/" exact  component={LoginComponent}/>
                        <Route path="/login"  exact component={LoginComponent}/>
                        <Route path="/Sinup"  exact component={SinupComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" exact component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/todo/:id" exact  component={updateTodoComponent}/>
                        <AuthenticatedRoute path="/add" exact  component={addTodoComponent}/>
                        <AuthenticatedRoute path="/todo" exact  component={TodoComponent}/>
                        <AuthenticatedRoute path="/logout"  exact component={LogoutComponent}/>
                        <Route component={ErrorComponent}/>
                        </Switch>
                <FooterComponent/>
                </Router>
               
            </div>
        )
    }
}

function ErrorComponent() {
    return <div> Page Not Found </div>   
}

export default TodoApp;