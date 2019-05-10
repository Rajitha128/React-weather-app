import React from 'react';
import './WeekTempretureControl.css';
import {getWeatherIcon} from '../../helpers/weatherIcon';
import {getDay} from '../../helpers/dayFormat';

export default function WeekTempretureControl (props){

    return(
        <div className="days-sec">
           {props.nextDayWeather.map((item) => 
               
                <div className="day1" key={item.id}>
                    <div className="day-col">
                        <h2>{getDay(item.nextDayDate,item.id)}</h2>
                    </div>
                    <div  className="icon-col">
                        <i className={"wi " + getWeatherIcon(item.nextDayWeatherLabel) + " icon-styles"}></i>
                    </div>
                    <div  className="value-col">
                        <h2>{item.nextDayTempreture}</h2>
                    </div>
                </div>
           )}
        </div>
    );
}