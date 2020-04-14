import React from 'react';
import {connect} from 'react-redux';
import Chart from '../components/charts';

class WeatherList extends React.Component {

    renderWeather(cityData) {

        const temps = cityData.list.map(weather=>weather.main.temp);
        const pressures = cityData.list.map(weather=>weather.main.pressure);
        const humidities = cityData.list.map(weather=>weather.main.humidity);

        console.log(temps);

        return (
            <tr key = {cityData.city.name} className="collapsing center aligned">
                <td>{cityData.city.name}</td>
                <td className="bottom aligned">
                    <Chart data={temps} color="red" units="K"/>
                </td>
                <td className="bottom aligned">
                    <Chart data={pressures} color="black" units="hPa"/>
                </td>
                <td className="bottom aligned">
                    <Chart data={humidities} color="blue" units="%"/>
                </td>
            </tr>
        );
    }

    render() { 
        return (
         <table className="ui 4 selectable celled table">
             <thead>
                <tr>
                    <th className="center aligned">City</th>
                    <th className="center aligned">Temperature (K)</th>
                    <th className="center aligned">Pressure (hPa)</th>
                    <th className="center aligned">Humidity (%)</th>
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