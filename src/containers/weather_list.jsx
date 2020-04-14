import React, { PureComponent } from 'react';
import {connect} from 'react-redux';


class WeatherList extends React.Component {

    renderWeather(cityData) {
        return (
            <tr key = {cityData.name}>
                <td>{cityData.name}</td>
                <td>{cityData.main.temp}</td>
                <td>{cityData.main.pressure}</td>
                <td>{cityData.main.humidity}</td>
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