import React ,{Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component{     
    constructor(props){
        super(props);
        this.state={
                    username:"rajumehta",
                    password:"dummy",
                    hasLoginfailed:false,
                    loginSuccessful:false
        }
        this.handleChange=this.handleChange.bind(this)
        this.loginclick=this.loginclick.bind(this)
    }
      handleChange(e){
        this.setState({[e.target.name]:e.target.value})
      }
    loginclick()
        {
          if(this.state.username==='rajumehta' && this.state.password==='dummy'){
              AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
              this.props.history.push(`/welcome/${this.state.username}`)
              this.setState({
                  hasLoginfailed:false,
                  loginSuccessful:true
              })
          }
           else{
            //console.log('failed')
            this.setState({
                hasLoginfailed:true,
                loginSuccessful:false
            })
           }
       // console.log(this.state.username)
        //    
        
        //  AuthenticationService.excuteBasicAuthenticationService(this.state.username,this.state.password)
        //    .then( () =>{
        //     AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
        //     this.props.history.push(`/welcome/${this.state.username}`)
        //    }
        //    ) .catch( ()=>{
        //     this.setState({
        //         hasLoginfailed:true,
        //         loginSuccessful:false
        //     })
        //    }
        //    )
    
        // AuthenticationService.excuteJWTAuthenticationService(this.state.username,this.state.password)
        // .then((response) =>{
        //  AuthenticationService.registerSuccessfulForJWTLogin(this.state.username,response.data.token)
        //  this.props.history.push(`/welcome/${this.state.username}`)
        // } ) 
        // .catch(()=>{
        //  this.setState({
        //      hasLoginfailed:true,
        //      loginSuccessful:false})
        // })

        }
        
        render(){
            return(
                <div>
                    <h1>Login</h1>
                    <div className="container">
                     {this.state.hasLoginfailed && <div className="alert alert-warning">Invalid Credentails </div>}
                    Username:<input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br/>
                    Password:<input type="password" name="password" value ={this.state.password} onChange={this.handleChange}/><br/>
                    <button className="btn btn-success" onClick={this.loginclick}>Login</button>
                    </div>
                </div>
            )    
        
    }
    
    } 
export default LoginComponent;