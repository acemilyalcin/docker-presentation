import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data,setData] = React.useState([]);

  axios.get('http://localhost:3000/')
  .then(function (response) {
    setData(response);
  })

  return (
        <ul>
          {JSON.parse(data).forEach(data => {
              <li>{data}</li>
          })}
        </ul>
  );
}

export default App;
