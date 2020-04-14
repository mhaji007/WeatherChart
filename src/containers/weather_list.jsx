import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import { fetchWeather } from '../actions';

class WeatherList extends React.Component {
    render() { 
        return (
         <table className="ui selectable celled table">
             <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
             </thead>
             <tbody>

             </tbody>
        </table> );
    }
}
 const mapStateToProps = (state) =>{
     return {weather:state.weather}
 }
export default connect(mapStateToProps)(WeatherList);