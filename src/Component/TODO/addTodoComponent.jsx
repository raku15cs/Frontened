import React, { Component } from 'react'
import formik, { Formik, Form, Field, ErrorMessage } from 'formik'
import moment from 'moment'
import AuthenticationService from './AuthenticationService.js'
import TodoSeviceapi from './Api/Todo/TodoSeviceapi.js'

class addTodoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null,
            username: "shashi",
            description: "laern java raju",
            done:"false",
            targetdate: moment(new Date()).format('YYYY-MM-DD')
            
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    
    validate(values) {
        let error = {}
        if (!values.description) {
            error.description = 'Enter the Description field'
        }
        else if (values.description.length < 5) {
            error.description = 'Enter  Atleast 5 character in the Description field'
        }
        if (!moment(values.targetdate).isValid()) {
            error.targetdate = "Enter a valid date"

        }
        if (!values.done) {
            error.description = 'Enter the field'
        }

        return error;
    }

    onSubmit(values) {
        let user = AuthenticationService.userName();
        TodoSeviceapi.savesTodo(user, {
              username: this.state.username,
              description: values.description,
              targetdate: values.targetdate,
               done:values.done
        })
            .then(response => {
                this.setState({ message: `update of id ${this.state.id}is Successful` })
                this.props.history.push(`/todo`)

            })
        // console.log(values)
    }
    
   

    render() {
        let { description, targetdate,done } = this.state;
        //  let targetdate=this.state.targetdate

        return (
            <div>
                <h1> Add New Todo Here</h1>
                <div className="container">
                    <Formik
                        initialValues={{ description, targetdate,done }}
                        onSubmit={this.onSubmit}
                        validate={this.validate}
                        validateOnBlur={false}
                        validateOnChange={false}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <ErrorMessage name="targetdate" component="div" className="alert alert-warning" />
                                    <ErrorMessage name="done" component="div" className="alert alert-warning" />

                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>TargetDate</label>
                                        <Field className="form-control" type="date" name="targetdate" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Is Done</label>
                                        <Field className="form-control" type="text" name="done" />
                                    </fieldset>

                                    <button className="btn btn-success">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>

                
            </div>
        )
    }

}
export default addTodoComponent