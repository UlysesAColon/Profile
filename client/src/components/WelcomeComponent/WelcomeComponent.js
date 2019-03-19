import React from 'react';


    class WelcomeComponent extends React.Component{
    render() {
        console.log(this.props);
        return(
            <div>
            <div>
            <h2> Ulyses' hobbies include: 
                <ul>
                {this.props.uname.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                </ul>
            </h2>
            </div>
            <hr />
            {/* I am interested in making the above component unmount. might need some restructuring */}
            {this.props.children}
            </div>
        );
    }
}

export default WelcomeComponent;