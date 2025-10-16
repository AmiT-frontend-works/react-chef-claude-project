import React from "react"

export default function Main() {
    
    const [ingredients, setIngredients] = React.useState([])
    //const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const ingredientsListItems = ingredients.map(ingredients => (
        <li key={ingredients}>{ingredients}</li>
    ))

    function handleSubmit(event) {
      event.preventDefault()
      
      const formData = new FormData(event.currentTarget)
      const newIngredient = formData.get("ingredient")
      
      setIngredients(prevIngredients => [...prevIngredients, newIngredient])

    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}


// going out or not excersise
/*export default function App() {
    
    const [isGoingOut, setIsGoingOut] = React.useState(true)

    function changeMind() {
        setIsGoingOut(prevState => !prevState)
    }

    //const isGoingOut = true
    //const answer = isGoingOut ? "Yes" : "No" // because isGoingOut is already a boolean we don't need to do isGoingOut === true

    // let answer = isGoingOut === true ? "Yes" : "No" // another way to do it
    
    // Remove the code below 👇 once your ternary is done
    // if(isGoingOut === true) {
    //     answer = "Yes"
    // } else {
    //     answer = "No"
    // }
    
    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button className="value" onClick={changeMind} aria-label={`Current answer is ${isGoingOut ? "Yes" : "No"}. Click to change it.`}>{isGoingOut ? "Yes": "No"}</button>
            <button onClick={() => {setIsGoingOut(!isGoingOut)}} className="value">{isGoingOut ? "Yes" : "No"}</button> // another way
            <button className="value">{isGoingOut ? "Yes" : "No"}</button> // another way
        </main>
    )
}
*/

/*export default function App() {
    
    const [count, setCount] = React.useState(0)

    // *
    //  * Note: if you ever need the old value of state
    //  * to help you determine the new value of state,
    //  * you should pass a callback function to your
    //  * state setter function instead of using
    //  * state directly. This callback function will
    //  * receive the old value of state as its parameter,
    //  * which you can then use to determine your new
    //  * value of state.
    //  *

    function add() {
        setCount(prevCount=> prevCount + 1)

        // using call back function to do it
        // setCount(function(prevCount) {
        //     return prevCount + 1
        // })

        // another way to do it
        //setCount(count + 1) // never modify count directly like count++ or count = count + 1
    }

    function subtract() {
        
      setCount(prevCount => prevCount - 1)

      // this works but not the best practice
      //setCount(count - 1)

    }

  
  
    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" onClick={subtract} aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button className="plus" onClick={add} aria-label="Increase count">+</button>
            </div>
        </main>
    )
}
    */

/* A quiz about state
1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?
   1. Pass the new version of state that we want to use as the 
      replacement for the old version of state.
   2. Pass a callback function. Must return what we want the new
      value of state to be. Will receive the old version of state
      as a parameter so we can use it to help determine what we want 
      the new value of state to be.


2. When would you want to pass the first option (from answer
   above) to the state setter function?
   
   Whenever we don't really care about (or need) the old value,
   we simply want to set a new value.


3. When would you want to pass the second option (from answer
   above) to the state setter function?

   Whenever we do care about the previous value in state and need
   it to help us determine what the new value should be.


*/

// for the is state imortant excersise
/*
import React from "react"
export default function App() {
    
    const [result, setIsImportant] = React.useState("Yes") // useState is a function that returns an array with two elements: the current state value and a function to update it
    console.log(result)

    function handleClick() {
        setIsImportant("Definately")
    }
    
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value" onClick={handleClick}>{result}</button>
        </main>
    )
}*/




// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

