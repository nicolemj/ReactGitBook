import React, { Component } from "react";
import { Form, FormGroup, Label, Button, Input } from 'reactstrap';

class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateSignUp = this.validateSignUp.bind(this);
        
    }

    handleChange  (event)  {
        this.setState({
            [event.target.name]: event.target.value
        });  
        console.log(this.state)   
    }
    handleSubmit  (event)  {
        console.log(this.state)
        event.preventDefault()
    }

    handleSubmit(event) {
        fetch("http://localhost:3000/api/user", {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
                })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
        }) 
        event.preventDefault()
    }
    
    validateSignUp(event) {
        this.setState({
            errorMessage:'Fields must not be empty'
        })
        event.preventDefault();
    }


    render() {
        
        return (
            <div>
                <h1>Sign Up</h1>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellat, atque nulla, soluta vero reprehenderit numquam incidunt, rem quaerat quos voluptatum perferendis. Distinctio culpa iste atque blanditiis placeat qui ipsa?</h6>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input onChange={this.handleChange} id="username" type="text" name="username" placeholder="enter username"  />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input onChange={this.handleChange} id="su_password" type="password" name="password" placeholder="enter password"  />
                    </FormGroup>
                    <Button type="submit"> Submit </Button>    
                </Form>
            </div>
        )
    }
}

export default Signup;