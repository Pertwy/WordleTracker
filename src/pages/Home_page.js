import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { createEffort } from '../graphql/mutations'
import { API, graphqlOperation } from 'aws-amplify'

export default function Home_page() {

    const [wordleInput, setWordleInput] = useState("")

    function formatWordle(wordle){
        
        let split = wordle.split(" ")
        let day = parseInt(split[1])

        split.splice(0,2)
        split.splice(1,1)

        let colourString = ""
        for (let i = 1; i < split.length; i++){
            colourString += split[i] + " "
        }

        let score
        let attempts = split[0][0]
        if (attempts === "X") score = 0
        else score = 7 - parseInt(attempts)

        
        return {"day":day, "score":score , "colourString":colourString, "userEffortDaysId": "d750fcb2-b2cf-4a26-9582-84523205e5e4"}
    }

    async function submitEffort(wordle){

        let data = formatWordle(wordle)
        console.log(data)

        await API.graphql(graphqlOperation(createEffort, {input:data}))
            .then(res => console.log(res))
        //await API.graphql({ mutation: createEffort, variables: data})
        // await API.graphql(createEffort, {
        //     input: data
        //   }
        // )
        
        // .catch(err => console.log(err))
    }


    return (
        <div>
            <h1>Wordle Tracker</h1>
            <h3>Wordle Scorekeeping for your team</h3>

            <input onChange={(e)=>setWordleInput(e.target.value)} placeholder='Paste Todays Wordle'></input>

            <button onClick={()=>submitEffort(wordleInput)}>Submit</button>
            <button>Visit Wordle</button>
            <button>Sign In/Up</button>
            <button>Join Team</button>
            <button>Create Team</button>
            <Link to="profile">Profile</Link>

            <h3>Friends Leaderboard</h3>
            <h3>Groups Leaderboard</h3>
            <h3>Overall  Leaderboard</h3>
        </div>
    )
}
