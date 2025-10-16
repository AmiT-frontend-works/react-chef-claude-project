
import Header from "./Header"
import Main from "./main"

// the John Doe contact card excersise
// import React from "react"
// import avatar from "./assets/user.png"
// import starFilled from "./assets/star-filled.png"
// import starEmpty from "./assets/star-empty.png"

export default function App() {

  /* the John Doe contact card excersise
  const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    let starIcon = contact.isFavorite ? starFilled : starEmpty

    function toggleFavorite() {
        // setContact(prevContact => {
        //   return {
        //     ...prevContact,
        //     isFavorite: !prevContact.isFavorite
        //   }
        // })

        // another way to rewrite the above function
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
          })
        )
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        ariga-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
                        className="favorite-button"
                    >
                        <img
                            src={starIcon}
                            alt="empty star icon"
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName }
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )*/


  //for the chef claude excersise
  return (
    <>
      <Header />
      <Main />
    </>
  )

  
  /* for adding favorite things excersise 
  const [myFavoriteThings, setMyFavoriteThings] = React.useState([])
  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
  "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

  function addFavoriteThing() {
    
    
    // when setting a string "Test" after the prevFavThings.
    //setMyFavoriteThings(prevFavThings => [...prevFavThings, "Test"])
    
    // when setting the next item in the allFavoriteThings array
    setMyFavoriteThings(prevFavThings => [
      ...prevFavThings,
      allFavoriteThings[prevFavThings.length]
    ])
  }

  
  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">
        {thingsElements}
      </section>
    </main>
  )

  */
  
  
  
  
}


/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/