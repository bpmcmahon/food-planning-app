import './App.css';
import React, { useState } from 'react';
import useAxios from './hooks/useAxios';
import Meal from './Meal';
import SearchInput from './SearchInput';

function App() {
  const [mealName, setMealName] = useState("")
  const [mealData, setMealData] = useState("")

  const [setUrl, data, loading, setLoading, error] = useAxios()
  
  function handleSubmit(e){
    e.preventDefault();

    setMealData(mealName)

    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    
    setLoading(true)
  }

  return ( 
    <div className="App">
          <SearchInput handleSubmit={handleSubmit} mealData={mealName} setMealName={setMealName} />

          <Meal loading={loading} data={data} mealData={mealData} error={error}/>
    </div>
  );
}

export default App; 
