import React ,{Component}from 'react'
import './Counter.css'
import { render } from '@testing-library/react'

class Counter extends Component{
    constructor(){
        super();
       this.state = {
           counter:0
       }
           //this.increment=this.increment.bind(this);
          //this.decrement=this.decrement.bind(this);
    } 
    render=()=>{
        return(
            <div className="Counter">
             <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
             <CounterButton by ={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
             <CounterButton by={10} incrementMethod={this.increment}  decrementMethod={this.decrement}/>
             <span className="count"> {this.state.counter}</span>
            <button onClick={this.reset}>Reset</button>
          </div>
        )
        }

        increment=(by)=>{
            //console.log("increment")
               this.setState({
                            counter:this.state.counter+by
                           });   
        }
        decrement=(by)=>{
            //console.log("increment")
            if(this.state.counter+1>by)
               this.setState({
                            counter:this.state.counter-by
                           });   
        }
        reset=()=>{
            //console.log("increment")
               this.setState({
                            counter:0
                           });
         
        }
         
    }

class CounterButton extends Component{
    // constructor(){
    //     super();
    //    this.state = {
    //        counter:0
    //    }
    //        //this.increment=this.increment.bind(this);
    //       //this.decrement=this.decrement.bind(this);
    // } 

    render=()=>{
    return(
        <div className="CounterBotton">
      <button onClick={()=> this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
      <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
      </div>
    )
    }
    // increment=()=>{
    //     //console.log("increment")
    //        this.setState({
    //                     counter:this.state.counter+this.props.by});
    //                      this.props.incrementMethod(this.props.by);
     
    // }
    // decrement=()=>{
    //     //console.log("increment")
    //     if(this.state.counter+1>this.props.by)
    //        this.setState({
    //                     counter:this.state.counter-this.props.by});
    //                      this.props.decrementMethod(this.props.by);
     
    // }
}
export default Counter;