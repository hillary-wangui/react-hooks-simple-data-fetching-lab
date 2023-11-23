// create your App component here
// create your App component here
import React from "react"
import { useState } from "react"
import { useEffect } from "react"
function App() {
    const [randomDogs, setRandomDogs] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => setRandomDogs(data.message))
        setIsLoading(true)
    }, [])
    if(!isLoading) return(<p>Loading...</p>)
    return(
        <div>
            <img src={randomDogs} alt="A Random Dog"></img>
        </div>
    )
}

export default App