import React from 'react';
import './App.css';
import {Stoke} from './data/db'
import RecipeItem from './components/RecipeItem'

function App() {
  const foodsList = Stoke;

  return (
    <>
      {/* <div className="title">RECIPES</div> */}
      <div className="App">
          { foodsList.map((value)=> 
            <RecipeItem
            name={value.name} 
            ingredients={value.ingredients} 
            steps = {value.steps}
            image = {value.imageURL}
            />
          )}  

      </div>
    </>
  );
}

export default App;
