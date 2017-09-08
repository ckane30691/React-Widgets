import React from 'react';

export default class Weather extends React.Component {
  constructor() {
    super();
    // this.apiKey = '1cb5a2f98773b84b88a87fea368d23d5';
    this.state = {name:"", temp:""};
  }

  render() {
    return(
    <div>
      <h3>City: {this.state.name} </h3>
      <h3>Temp: {this.state.temp}</h3>
    </div>
    );
  }

  fetchWeather(pos) {
    let lon = pos.coords.longitude;
    let lat = pos.coords.latitude;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.status === 200) {
        let res = xhr.response;
        this.setState({name: res.name, temp: res.main.temp});
      }
    };
    xhr.open(
      'GET',
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1cb5a2f98773b84b88a87fea368d23d5`,
      true
    );
    xhr.responseType = "json";
    xhr.send();
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.fetchWeather.bind(this));
  }
}

// https://api.openweathermap.org/data/2.5/weather?lat=37.780349&lon=-122.40509109999999&appid=1cb5a2f98773b84b88a87fea368d23d5
