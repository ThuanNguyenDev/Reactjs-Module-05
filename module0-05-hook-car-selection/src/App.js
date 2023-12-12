import React from 'react';
import {useState} from 'react';

export default function App() {


  let carList = ['Car A', 'Car B', 'Car C'];
  let colorList = ['Red', 'Blue', 'Green'];

  let [selectedCar, setSelectedCar] = useState({ car: carList[0], color: colorList[0] });

  let handleCarChange = (event) => {
    let selectedCarValue = event.target.value;
    setSelectedCar((previousState) => {
      return { car: selectedCarValue, color: previousState.color };
    });
  };


  let handleColorChange = (event) => {
   let selectedColorValue = event.target.value;
    setSelectedCar((previousState) => {
      return { car: previousState.car, color: selectedColorValue };
    });
  };

  return (
    <div>
      <h1>Car and Color Selection</h1>

      <label>Choose a Car:</label>

      <select value={selectedCar.car} onChange={handleCarChange}>
        {carList.map((car) => (
          <option key={car} value={car}>
            {car}
          </option>
        ))}
      </select>
      <br />

      <label>Choose a Color:</label>

      <select value={selectedCar.color} onChange={handleColorChange}>
        {colorList.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
      <br />
      <h2>Your Selection:</h2>
      <p>Car-Color: {selectedCar.car} -- {selectedCar.color}</p>
    </div>
  );


}
