import React, { Component } from 'react'
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export default class UserForm extends Component {
    state = {
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        occupation: "",
        city: "",
        bio: ""
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    handleChange = inp => e => {
        const value = e.target.value;
        this.setState({[inp]: value})
    }

    render() {
        const { step, firstName, lastName, email, city, occupation, bio } = this.state;
        const values = { firstName, lastName, email, bio, occupation, city};
        switch(step){
            case 1:
                return (
                    <FormUserDetails 
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {{ firstName, lastName, email }}/>
                )
            case 2:    
                return (
                    <FormPersonalDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={{ occupation, city, bio }}
                    prevStep={this.prevStep}/>
                )
            case 3:
                return (
                    <Confirm
                    nextStep={this.nextStep}
                    values={values}
                    prevStep={this.prevStep}/>
                )
            case 4:
                return <Success/>
        }
    }
}
