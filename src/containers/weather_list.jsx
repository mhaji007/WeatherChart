import React from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';

class WeatherList extends React.Component {

    renderWeather(cityData) {

        const temps = cityData.list.map(weather=>weather.main.temp);
        console.log(temps);

        return (
            <tr key = {cityData.city.name}>
                <td>{cityData.city.name}</td>
                <td>
                <Sparklines height={120} width={180} data={temps}>
                <SparklinesLine color="red" />
                </Sparklines>
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