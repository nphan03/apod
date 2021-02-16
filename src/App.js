import React from "react";
import axios from "axios";
import ImageList from "./ImageList.js";
import SearchForms from "./SearchForms.js";
import Details from "./Details.js";
import UserSubcribe from "./UserSubcribe.js";

class App extends React.Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            images : [],
            currentImg: undefined
        };

        this.setState = this.setState.bind(this);
        this.chooseImg = this.chooseImg.bind(this);
    }
    
    chooseImg(img){
        this.setState({currentImg: img});
    }
    
    componentDidMount(){
        axios.get("/images")
        .then(result => {
            let arrayOfImgs = [];
            arrayOfImgs.push(result.data);
            this.setState({images:arrayOfImgs, currentImg:arrayOfImgs[0]});
        }).catch(err => {
            console.log(err);
        });
    }
    
    render() {
        return <div className="app">
            <h1>APOD - Astronomy Picture of the Day</h1>
            <UserSubcribe />
            <SearchForms setState={this.setState}/>
            <ImageList images={this.state.images} chooseImg={this.chooseImg}/>
            <Details {...this.state.currentImg}/>
        </div>;
    }
}

export default App;