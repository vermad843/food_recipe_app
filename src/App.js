import React, {useState,useEffect}  from 'react';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState("chicken");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "0c615612";
  const APP_KEY = "3fd964336e67887935c62858ceb1c1d4";
  
  useEffect(() => {
     getRecipes();
  },[]);

  const getRecipes = async () => {
    const res = await axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    setRecipes(res.data.hits);
  }

  const onInputChange = (e) => {
     setSearch(e.target.value);
  }

  return (
    <div className="App">
       <Header 
         search = {search}
         onInputChange = {onInputChange}  
         />
      <div className = "container">
         <Recipes
            recipes = {recipes}
          />
      </div>   
    </div>
  );
}

export default App;
