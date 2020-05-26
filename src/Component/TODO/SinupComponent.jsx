import React ,{Component } from 'react'
import TodoSeviceapi from './Api/Todo/TodoSeviceapi';
import formik, { Formik, Form, Field, ErrorMessage } from 'formik'

class SigupComponent extends Component{
  constructor(props){
    super(props);
    this.state={
                username:'ttyuio',
                email:'',
                password:'',
                conformpassword:''
    }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    
}
  // handleChange(e){
  //   this.setState({[e.target.name]:e.target.value})
  // }
    onSubmit(values){
      //console.log("huhnknkn")
      TodoSeviceapi.sinupapi({
        username:values.username,
        email:values.email,
        password:values.password,
        conformpassword:values.conformpassword
        
      })
      .then(response => {
        console.log(this)
         this.props.history.push('/login')
        console.log("Success")
        
       
        // this.props.history.push('/')
       })
        .catch(()=>{
          console.log("failed")
          //  this.props.history.push('/Sinup')
        })
    }
    validate(values){
      let error={}
       if(!values.username){
         error.username="Enter the username" 
       }
       if(!values.email){
         error.email="Enter the email id"
       }
       if(!values.password){
        error.password="Enter the password"
       }
       else if(values.password.length < 5){
        error.password="Minimum password length should be 8 character "
       }

       if(!values.conformpassword){
         error.conformpassword="Enter the confirm password"
       }
        else if(!(values.password===values.conformpassword)){
          error.conformpassword="Password does not matched"
        }
      return error
    }
    render(){
      let {username,email,password,conformpassword}=this.state
        return(
            <>
             <div className="container "></div>
             <Formik
             initialValues={{username,email,password,conformpassword}}
             onSubmit={this.onSubmit}
             validate={this.validate}
             validateOnBlur={false}
             validateOnChange={false}
             enableReinitialize={true}
             
             >
               {
                 (props) =>(
           <Form>
              <ErrorMessage name="username" component="div" className="alert alert-warning" />
              <fieldset className="form-group">
                <label htmlFor="username-register" className="text-muted mb-1">
                  <small>Username</small>
                </label>
                <Field id="username-register" name="username" className="form-control" type="text" placeholder="Pick a username" 
                autoComplete="off"  />
              </fieldset>

              <fieldset className="form-group">
                <label htmlFor="email-register" className="text-muted mb-1">
                  <small>Email</small>
                </label>
                <ErrorMessage name="email" component="div" className="alert alert-warning" />
                <Field id="email-register" name="email" className="form-control" type="email" placeholder="you@example.com"
                 autoComplete="off"  />
              </fieldset>
              <ErrorMessage name="password" component="div" className="alert alert-warning" />
              <fieldset className="form-group">
                <label htmlFor="password-register" className="text-muted mb-1">
                  <small>Password</small>
                </label>
                <Field id="password-register" name="password" className="form-control" type="password"
                placeholder="Create a password"   />
              </fieldset>

              <ErrorMessage name="conformpassword" component="div" className="alert alert-warning" />
              <fieldset className="form-group">
                <label htmlFor="password-c-register" className="text-muted mb-1" >
                  <small>Confirmpassword</small>
                </label>
                <Field id="password-c-register" name="conformpassword" className="form-control" type="password" 
                placeholder="Create a password"   />
              </fieldset>

              <button  className=" btn  btn-success ">
                Sign up for TodoApp
              </button>
            </Form>
                 )
             }
            </Formik>
            
            </>
        )
    }
}
export default SigupComponent;