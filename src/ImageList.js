import React from "react";

class ImageList extends React.Component {
    
    render(){
        return <div className="image-list">
            <ul> 
            {this.props.images.map((img,index)=>
                <li key={index}><button onClick={()=>this.props.chooseImg(img)}><b>{img.date}</b>: {img.title}</button></li>
            )}
            </ul>
        </div>;
    }
}

export default ImageList;