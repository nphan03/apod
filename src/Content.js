import React from "react";

class Content extends React.Component {
    
    render(){
        
        return <div className="content">
            <h2>{this.props.title}</h2>
            
            <p><b>Copyright:</b> {this.props.copyright}</p>
            <p>{this.props.explanation}</p>
        </div>;
    }
}

export default Content;