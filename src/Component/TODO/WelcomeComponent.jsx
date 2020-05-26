import React ,{Component,useEffect } from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import HelloWorldService from './Api/Todo/HelloWorldService.js'

class WelcomeComponent extends Component{
    constructor(props){
        super()
        this.state={   welcomMessage:null
        }
        this.excuteHello=this.excuteHello.bind(this)
        this.handleSuccessfulResponse=this.handleSuccessfulResponse.bind(this)
    //     useEffect(() =>{
    //         document.title="Home|TodoApp"
    //         window.scrollTo(0,0) },[])
     }
    render()
    {  
        return(
            <>
            <h1>Welcome</h1>
            <div className="container">  Welcome  {this.props.match.params.name} .
            <br/>
            You can manage your ToDo<Link to="/todo"> here</Link>
            </div>
            <div className="container">
                click her to excute service
                <button className ="btn btn-success" onClick={this.excuteHello}> Hello</button>
            </div>
            <div className="container">
                {this.state.welcomMessage}
                </div>
            </>
        )
    }

    excuteHello(){
        //console.log("raju mehta")
          HelloWorldService.excuteHelloWorld()
        .then(response=> this.handleSuccessfulResponse(response))
        .catch(error => this.hanldeError(error))
    }
    handleSuccessfulResponse(response){
        this.setState({welcomMessage:response.data});

    }
    hanldeError(error){
        

    }
}
export default WelcomeComponent;