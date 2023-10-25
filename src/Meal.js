function Meal({loading, data, mealData, error}) {

    if(!mealData){
        return <h1>Search for a meal</h1>
    }

    if(loading && !data){
        return <h1>Loading...</h1>
    }

    if(error){
        return <h1>An error has occured</h1>
    }

    return ( 
        <div>
            <h1>{data.meals[0].strMeal}</h1>
            <img src={data.meals[0].strMealThumb} />
            <p>Category: {data.meals[0].strCategory}</p>
            <p>Instructions: {data.meals[0].strInstructions}</p>
        </div>
     );
}

export default Meal;