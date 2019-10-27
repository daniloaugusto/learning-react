import React, {useEffect}  from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const { REACT_APP_APP_ID: APP_ID, REACT_APP_APP_KEY: APP_KEY } = process.env;

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
