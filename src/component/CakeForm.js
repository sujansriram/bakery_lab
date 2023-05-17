import { useState } from "react";

const CakeForm = ({listOfCakes, setListOfCakes}) => {
    
    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [error, setError] = useState("");
    
    const handleValidation = () => {
        let errorMessage = "";
    
        if(listOfCakes.find((cake) => cake.cakeName === cakeName)){
          errorMessage = "This cake already exists!";
        }
    
        if(cakeName === "" || ingredients === "" || isNaN(parseInt(price)) || isNaN(parseInt(rating))){
          errorMessage = "Please fill in all fields";
        }
    
        setError(errorMessage);
    
        return errorMessage !== "";
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(!handleValidation()){
            const updatedCakes =[...listOfCakes];

            const newCake = {
            cakeName: cakeName,
            ingredients: ingredients.split(", "),
            price: price,
            rating: rating
            }
            
            updatedCakes.push(newCake);

            setListOfCakes(updatedCakes);  // this is where you should save it into a database
        }
    }
    
    return (  
        <>
            <h2>Add Cake</h2>
            <form onSubmit={handleFormSubmit}>
                <input  
                type="text"
                name="cakeName"
                placeholder="Cake Name"
                value={cakeName}
                onChange={(e) => setCakeName(e.target.value)}/> 
                <input  
                type="text"
                name="ingredients"
                placeholder="Ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}/> 
                <input  
                type="number"
                name="price"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}/> 
                <input  
                type="number"
                name="rating"
                placeholder="Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}/> 

                <input type="submit" value="Submit"/>
            </form>
            <p>{error}</p>
        </>
    );
}
 
export default CakeForm;