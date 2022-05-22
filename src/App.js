import reactLogo from './logo.svg';
import advancedLogo from './advanced-logo.svg';
import './App.css';
import { useState, useEffect } from "react";


function App() {

  const [refreshData, setRefreshData] = useState(true); // initialise as true 
  const [theData, setTheData] = useState([]);

  useEffect(() => {
      if(refreshData) {
          fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
          .then( resp => resp.json())
          .then((data)=> {
                setTheData(data);
                setRefreshData(false);
          })
      }
  }, [refreshData])

  return (
    <div className="App">
      <header className="App-header">
        <img src={advancedLogo} className="Advanced-logo" alt="Advanced logo" />
        <img src={reactLogo} className="React-logo" alt="React logo" />
        {typeof theData['drinks'] !== 'undefined' ?
        <div>
            {theData['drinks'].map((drinkitem, drinkindex) =>
              <div key = { 'drinkitem' + drinkindex }>
                  {drinkitem.strDrink}  {drinkitem.strAlcoholic}  
              </div>
           )}  
        </div>
        :null}
      </header>
    </div>
  );
}

export default App;
