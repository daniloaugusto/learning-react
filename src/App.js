import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const { REACT_APP_APP_ID: APP_ID, REACT_APP_APP_KEY: APP_KEY } = process.env;

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const api_default_url = 'https://api.edamam.com/';
    const api_query_url = `search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const response = await fetch(api_default_url + api_query_url);
    const data = await response.json();
    
    setRecipes(data.hits);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
