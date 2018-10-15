import React, { Component } from 'react';
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {
  render() {
    const renderWeather = this.props.weather.map(cityData => {
      const id = cityData.city.id;
      const name = cityData.city.name;
      const countryCode = cityData.city.country;
      const { lat, lon } = cityData.city.coord;
      const temps = cityData.list.map(weather => weather.main.temp - 273);
      const pressures = cityData.list.map(weather => weather.main.pressure);
      const humidities = cityData.list.map(weather => weather.main.humidity);

      return (
        <tr key={id}>
          <td>
            <GoogleMap lat={lat} lon={lon} />
            {name}, {countryCode}
          </td>
          <td><Chart data={temps} color="red" unit="°C" /></td>
          <td><Chart data={pressures} color="blue" unit="hPa" /></td>
          <td><Chart data={humidities} color="purple" unit="%" /></td>
        </tr>
      )
    });

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City, Country</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {renderWeather}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = ({ weather }) => (
  { weather }
)

export default connect(mapStateToProps)(WeatherList);