import React, { Component } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import SearchArea from './components/SearchArea/SearchArea';
import MainWidget from './components/MainWidget/MainWidget';
import WeekTempretureControl from './components/WeekTempretureControl/WeekTempretureControl';
import './App.css';

const API_KEY = "422edb157a5c2e7a35763933c19def46";

class App extends Component {

  state = {
    currentWeather: {
      currentLocation: 'Colombo',
      currentDate: new Date(),
      currentTempreture: 28.3,
      currentWeatherLabel: 'rain',
      currentWind: 1.5,
      currentHumidity: 60,
    },
    nextDayWeather: [{
      id: 1,
      nextDayDate: new Date(),
      nextDayTempreture: 22.1,
      nextDayWeatherLabel: 'rain'
    },
    {
      id:2,
      nextDayDate: new Date(),
      nextDayTempreture: 28.4,
      nextDayWeatherLabel: 'clear sky'
    },
    {
      id:3,
      nextDayDate: new Date(),
      nextDayTempreture: 25.4,
      nextDayWeatherLabel: 'broken clouds'
    }]
  }

  componentDidMount() {
    this.getWeather('Colombo')
  }

   async getWeather(city_name){
    
    const city = city_name;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`);
    const aapi_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}&units=metric`);
    const data = await api_call.json();
    const adata = await aapi_call.json();
    console.log(data);
    console.log(adata);

    let updatedArray = cloneDeep(this.state.nextDayWeather);
    var x=5;
    updatedArray.forEach(item => {
      item.nextDayDate = new Date()
      item.nextDayTempreture = adata.list[x].main.temp
      item.nextDayWeatherLabel = adata.list[x].weather[0].description
      x=x+8
    })

    this.setState({
      currentTempreture: data.main.temp,
      currentLocation: data.name,
      currentWind:data.wind.speed,
      currentHumidity: data.main.humidity,
      currentWeatherLabel: data.weather[0].description,
      nextDayWeather:updatedArray
    });
  }

  render() {
    let {nextDayWeather} = this.state;
      
    return (
      <div id="bsec" className="b-color body-sec">
         <div className="main-wrapper">
            <SearchArea getWeather={this.getWeather.bind(this)}/>
            <MainWidget location={this.state.currentLocation} date={this.state.currentDate} tempreture={this.state.currentTempreture} label={this.state.currentWeatherLabel} wind={this.state.currentWind} humidity={this.state.currentHumidity} pressure={this.state.currentPressure}/>
            <WeekTempretureControl nextDayWeather={nextDayWeather}/>
         </div>        
      </div>    
    );
  }
}
export default App;
