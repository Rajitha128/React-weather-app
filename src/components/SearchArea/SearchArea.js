import React from 'react';
import './SearchArea.css';

class SearchArea extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value: 'Colombo'};    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
    this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        var _input = this.state.value;
        var cities = ['Borella','Colombo','Kandy','Dehiwala','Jaffna', 'Rathnapura', 'Colombia','London','Anuradhapura','Dematagoda','Matara,SL','Matara','Galle','Negombo','Dambulla','Trincomalee','Polonnaruwa','Dehiwala','Batticaloa','Bentota','Hikkaduwa','katunayake',
                        'kalmunai','Beruwala','Ella','Kurunegala','Badulla','Matale','Wattala','Puttalam','Panadura','Peradeniya','Unawatuna','Mannar','Weligama','Bandarawela',
                        'Hatton','Gampola','Vavuniya','Ambalangoda','Chilaw','Maharagama'];
        var x=0;
        var city='';
        for(x=0;x<cities.length;x++){
            if(_input===cities[x]){                
                city=cities[x]
                this.props.getWeather(city);
                break;
            }
        }
        event.preventDefault();
    }
    
    render() {
    return(
        <div className="nav-sec">
            <div className="hamburger">
            </div>
            <form className="formz-inline" onSubmit={this.handleSubmit}>
                <button type="submit" value="Submit" id="searchBtn" ><i className="fas fa-search search-icon"></i></button>
                <input type="text" name="city" id="address-input" placeholder="Search Location..." list="list" value={this.state.value} onChange={this.handleChange}/>   
                <datalist id="list">
                    <option>Borella</option><option>kalmunai</option>
                    <option>Colombo</option><option>Beruwala</option>
                    <option>Kandy</option><option>Ella</option>
                    <option>Dehiwala</option><option>Kurunegala</option>
                    <option>London</option><option>Badulla</option>
                    <option>Jaffna</option><option>Matale</option>
                    <option>Rathnapura</option><option>Wattala</option>
                    <option>Matara,SL</option><option>Puttalam</option>
                    <option>Anuradhapura</option><option>Panadura</option>
                    <option>Dematagoda</option><option>Peradeniya</option>
                    <option>Matara</option><option>Unawatuna</option>
                    <option>Galle</option><option>Mannar</option>
                    <option>Negombo</option><option>Weligama</option>
                    <option>Dambulla</option><option>Bandarawela</option>
                    <option>Trincomalee</option><option>Hatton</option>
                    <option>Polonnaruwa</option><option>Gampola</option>
                    <option>Dehiwala</option><option>Vavuniya</option>
                    <option>Batticaloa</option><option>Kalutara</option>
                    <option>Bentota</option><option>Ambalangoda</option>
                    <option>Hikkaduwa</option><option>Chilaw</option>
                    <option>katunayake</option><option>Maharagama</option>
                </datalist>
            </form>           
        </div>
    )}
}
export default SearchArea;