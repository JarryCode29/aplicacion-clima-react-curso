import React, { useState } from "react"
import { useFetchClima } from "./hooks/useFetchClima"
const WeatherApp = () => {
  const [ciudad, setCiudad] = useState('')
  const difKelvin = 273.15
  const { data, fetchClima } = useFetchClima(ciudad)
  const handleCambioCiudad = (e) => {
    setCiudad(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (ciudad.length > 0) {
      fetchClima()
    }
  }
  return (
    <div className="container-title">
      <h1>Aplicación del Clima</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ciudad}
          onChange={handleCambioCiudad}
        />
        <button className="btn fill" type="submit">Buscar</button>
      </form>


      {data && (
        <div className="container">
            <div className="wrapper">
            <div class="banner-image"> <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="Icono del clima"
          /> </div>
            <h1>{data.name} {parseInt(data?.main?.temp - difKelvin)}ºC</h1>
            <p>Descrition: {data.weather[0].description}</p>
            </div>
        
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
