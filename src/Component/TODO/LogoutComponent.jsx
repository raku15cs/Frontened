import React ,{Component } from 'react'

class LogoutComponent extends Component{
    render(){
        // const isUserLoggnedIn=true
        //   console.log(isUserLoggnedIn)
        console.log('logout')
        return(
            <>
            <h1>You are logout </h1>
            <div className="container">
                Thank you for Using this application
            </div>
            </>
        )
    }
}
export default LogoutComponent;