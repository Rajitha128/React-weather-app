import React from 'react';
import './MainWidget.css';
import {getWeatherIcon} from '../../helpers/weatherIcon';
import {getBgImage} from '../../helpers/bgimage';
import {getFormattedDate,getDayName} from '../../helpers/dayFormat';

// thunderstorm clear sky
export default function MainWidget (props){
    var _temp;var _location;var _label;var _humidity;var _wind;
    var _date = new Date();
    if(props.tempreture==null){_temp=23;}else{_temp=props.tempreture;}
    if(props.location==null){_location='Colombo';}else{_location=props.location;}
    if(props.label==null){_label='clear sky';}else{_label=props.label;}
    if(props.humidity==null){_humidity=12;}else{_humidity=props.humidity;}
    if(props.wind==null){_wind=3.7;}else{_wind=props.wind;}

    return(
        <React.Fragment>
        <div className="main-widget">
            <div className="weather-value-sec">
                <div className="main-value content-styles">
                    <h1>{(_temp).toFixed(1)}°</h1>
                </div>
                <div className="sub-value content-styles">
                </div>
                <div className="city content-styles">
                    <h2>{_location}</h2>
                    <span>{getDayName(_date)} {getFormattedDate(_date)}</span>
                </div>
            </div>
            <div className="weather-icon-sec">
                <div className="main-value img-styles">
                    <i className={"wi " + getWeatherIcon(_label) + " icon-styles"}></i>
                </div>
                <div className="sub-value content-styles">
                    <h2>{_label}{getBgImage(_label)}</h2>
                </div>
                <div className="city content-styles">                  
                </div>
            </div> 
        </div>
        <div className="sub-widget">
            <div className="humidity-sec">
                <div className="value-sec">
                    <h2>{_humidity}%</h2>
                </div>
                <div className="sub-icon-sec">
                    <i className="wi wi-day-fog icon-styles"></i>
                    <h3>Humidity</h3>
                </div>
            </div>
            <div className="wind-sec">
                <div className="value-sec wind-value">
                    <h2>{_wind}</h2><span>m/s</span>
                </div>
                <div className="sub-icon-sec">
                    <i className="wi wi-day-fog icon-styles"></i>
                    <h3>wind</h3>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
}