import React from 'react';
import {connect} from 'react-redux';
import Chart from '../components/charts';

class WeatherList extends React.Component {

    renderWeather(cityData) {

        const temps = cityData.list.map(weather=>weather.main.temp);
        console.log(temps);

        return (
            <tr key = {cityData.city.name}>
                <td>{cityData.city.name}</td>
                <td>
                    <Chart data={temps} color="orange"/>
                </td>
            </tr>
        );
    }

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
                {this.props.weather.map(this.renderWeather)}
             </tbody>
        </table> );
    }
}
 const mapStateToProps = (state) =>{
     return {weather:state.weather}
 }
export default connect(mapStateToProps)(WeatherList);