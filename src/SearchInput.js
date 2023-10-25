function SearchInput({handleSubmit, mealName, setMealName}) {
    return (  
        <form onSubmit={(e) => handleSubmit(e)}>
            <input 
                type="text"
                value={mealName}
                onChange={(e) => setMealName(e.target.value)}
            />
            <button onClick={handleSubmit}>Search</button>
        </form>
        
    );
}

export default SearchInput;