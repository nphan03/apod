import React from "react";
import axios from "axios";

class SearchForms extends React.Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            date:'',
            fromDate:'',
            toDate:'',
            word:'',
            num:'',
            err_mess: []
        };
        
        this.chooseImgByDate = this.chooseImgByDate.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.chooseImgBtwDates = this.chooseImgBtwDates.bind(this);
        this.handlefromtoDateChange = this.handlefromtoDateChange.bind(this);
    }
    
    handleDateChange(event){
        this.setState({date: event.target.value});
    }
    chooseImgByDate(event){
        event.preventDefault();
       
        axios.get(`/images/${this.state.date}`)
        .then(result => {
            if(!Array.isArray(result.data)){
                this.setState({err_mess: []});
                let arrayOfImgs = [];
                arrayOfImgs.push(result.data);
                this.props.setState({images:arrayOfImgs, currentImg:arrayOfImgs[0]});
                this.setState({err_mess: ["Form submitted."]});
            }else{
                this.setState({err_mess: result.data});
            }
            this.setState({date:''});
        }).catch(err => {
            console.log(err);
        });
    }
    
    handlefromtoDateChange(e){
        if(e.target.name == "fDateValue"){
            this.setState({fromDate: e.target.value});
        }else{
            this.setState({toDate: e.target.value});
        }
    }
    chooseImgBtwDates(e){
        e.preventDefault();

        if( (Date.parse(this.state.fromDate)) <= (Date.parse(this.state.toDate)) ){ //check valid range of date before send the request
            axios.get(`/images/${this.state.fromDate}&${this.state.toDate}`)
            .then(result => {
                if(typeof(result.data[0])=="object"){
                    this.setState({err_mess: []});
                    let arrayOfImgs = result.data;
                    this.props.setState({images:arrayOfImgs, currentImg:arrayOfImgs[0]});
                    this.setState({err_mess: ["Form submitted."]});
                }else{
                    this.setState({err_mess: result.data});
                }
                this.setState({fromDate:'', toDate:''});
            }).catch(err => {
                console.log(err);
            });
        }else{
            this.setState({err_mess: ["Invalid range of date"], fromDate:'', toDate:''});
        }
    }
    
    render() {
        return <div className="searchforms">
            <form onSubmit={this.chooseImgByDate} className="specificdateform">
                <label htmlFor="specform">Search Picture of Date: </label> <br />
                <input type="text" onChange={this.handleDateChange} value={this.state.date} min="1995-06-16" pattern="\d{4}-\d{2}-\d{2}" placeholder="YYYY-MM-DD" id="specform"></input>
                <input type="submit" value="Submit"></input>
            </form>
            
            <div className="message">{this.state.err_mess.map((msg,index) => <p key={index}>{msg}</p>)}</div>
            
            <form onSubmit={this.chooseImgBtwDates} className="btwdatesform" id="btwdate">
                    <label htmlFor="btwdate"> Search Images Between Dates </label><br />
                    <label> Start Date
                        <input type="text" name="fDateValue" onChange={this.handlefromtoDateChange} value={this.state.fromDate} min="1995-06-16" pattern="\d{4}-\d{2}-\d{2}" placeholder="YYYY-MM-DD"></input>
                    </label> <br />
                
                    <label> End Date
                        <input type="text" name="tDateValue" onChange={this.handlefromtoDateChange} value={this.state.toDate} min="1995-06-16" pattern="\d{4}-\d{2}-\d{2}" placeholder="YYYY-MM-DD"></input> 
                    </label> 
                    
                    <input type="submit" value="Submit"></input>
            </form>
        </div>;
    }
}

export default SearchForms;