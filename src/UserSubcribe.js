import React from "react";
import axios from "axios";

class UserSubcribe extends React.Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            email:'',
            mess:''
        };
        
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handleUserSubcribeSubmit=this.handleUserSubcribeSubmit.bind(this);
    }
    
    handleEmailChange(e){
        this.setState({email: e.target.value});
    }
    handleUserSubcribeSubmit(e){
        e.preventDefault();
        
        axios.post(`/subcribe`, {email:this.state.email})
        .then(res => {
            this.setState({email:'', mess:res.data});
        })
        .catch(err => console.log(err));
    }
    render(){
        return <div className="user-register">
            <h4>Subcribe to get notifications of new images and exciting discoveries in astronomy every day</h4>
            <form onSubmit={this.handleUserSubcribeSubmit}>
                <label htmlFor="subcribeEmail">Email</label>
                <input type="email" onChange={this.handleEmailChange} value={this.state.email} id="subcribeEmail"></input>
                <input type="submit" value="Subcribe"></input>
            </form>
            
            <div className="message">
                {this.state.mess}
            </div>
            
        </div>;
    }
}

export default UserSubcribe;