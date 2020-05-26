import React ,{Component } from 'react'
//import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
//import AuthenticatedRoute from  './AuthenticationRoute.jsx'
import HelloWorldService from './Api/Todo/TodoSeviceapi.js'
import TodoSeviceapi from './Api/Todo/TodoSeviceapi.js'
import moment from 'moment'

class TodoComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            todos:[],
            message:null
        }
        this.deleteTodoClicked=this.deleteTodoClicked.bind(this)
        this.refreshtodo=this.refreshtodo.bind(this);
        this.updateTodoClicked=this.updateTodoClicked.bind(this);
    }
    componentDidMount(){
        this.refreshtodo();
        
    }
    deleteTodoClicked(id){
        let user=AuthenticationService.userName();
        TodoSeviceapi.deleteTodo(user,id)
        .then(response =>
            { this.setState({message:`delte of id ${id}is Successful`})
             this.refreshtodo();
            })
    }

    refreshtodo(){
        let user=AuthenticationService.userName();
         
        TodoSeviceapi.getAllTodo(user)
        
        .then((response) => 
            this.setState({todos:response.data},()=>{
                console.log(response)
            })
        
    
         ) 
    }

    updateTodoClicked(id){
        this.props.history.push(`/todo/${id}`)
        //console.log(id)
    }
 
    render()
    {
        return(
            <div> 
                <h1> List ToDo</h1>
                { this.state.message &&<div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Target_DATE</th>
                            <th>IS DONE</th>
                              <th>Delete</th>
                              <th>Update</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {   
                        this.state.todos.map (    
                        todo =>
                        <tr>
                            <td>{todo.id}</td>
                            <td>{todo.description}</td>
                            <td>{moment(todo.targetdate).format('DD-MM-YYYY')}</td>
                            <td>{todo.done}</td>
                            <td ><button className="btn btn-warning " onClick={()=> this.deleteTodoClicked(todo.id)}>Delete</button></td> 
                            <td ><button className="btn btn-success " onClick={()=> this.updateTodoClicked(todo.id)}>update</button></td>
            
                        </tr>
                        )}            
                    </tbody>
                </table>
               
                </div>
             </div>
        )
    }
}



export default TodoComponent;