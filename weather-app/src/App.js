import React, { Component } from 'react';
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "a2cc469ef8f6b9c326aeb4f98c875cdd";

class App extends Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: ""
  };

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + city 
      + "&appid=" + API_KEY + "&units=metric"
    );
    const data = await api_call.json();
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: data.cod
    })
    console.log(data);
  }

  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    )
  }
}

export default App;