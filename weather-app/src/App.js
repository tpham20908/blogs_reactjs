import React, { Component } from 'react';
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "a2cc469ef8f6b9c326aeb4f98c875cdd";

class App extends Component {
  getWeather = async () => {
    const api_call = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + city 
      + "&appid=" + API_KEY
    );
    const data = await api_call.json();
    console.log(data);
  }

  render() {
    return (
      <div>
        <Title />
        <Form />
        <Weather />
      </div>
    )
  }
}

export default App;