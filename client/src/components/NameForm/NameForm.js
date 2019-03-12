import React from 'react';
import WelcomeComponent from '../WelcomeComponent/WelcomeComponent';



class NameForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {value: '', inputname: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
        this.setState({inputname: e.target.value});
    }

    handleSubmit(e) {
        this.setState({inputname: e.target.inputname});
        console.log(this.state);    
        e.preventDefault();
    }
    render() {
        var user = {
        hobbies: ["Basketball","Baseball","Football","Reading"],
        name: "user",
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Hello what is your name? 
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    {/* The name submitted is: {this.state.value} */}
                </label>
                <input type="submit" value="Submit" />
                <WelcomeComponent uname={user}>
                    <p>Welcome {this.state.value}!</p>
                </WelcomeComponent>
            </form>  
        );
    }
}

export default NameForm;