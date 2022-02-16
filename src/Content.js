import React from "react";

class Content extends React.Component {
    
    render(){
        console.log(this.props.media_type);
        console.log(this.props.explanation);
        return <div className="content">
            <h2>{this.props.title}</h2>
            {(this.props.media_type == "video") ? <iframe width="420" height="315" src={this.props.url}></iframe>   
                : <img src={this.props.url} alt={this.props.title}/>
            }
            <p><b>Copyright:</b> {this.props.copyright}</p>
            <p>{this.props.explanation}</p>
        </div>;
    }
}

export default Content;