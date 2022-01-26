import React, { useEffect, useState } from 'react'

import { API, graphqlOperation } from 'aws-amplify'
//import { getUser } from '../graphql/queries'
import { getUser } from '../graphql/custom_queries'
import { customeGetUser } from '../graphql/custom_queries'

export default function Profile_page() {

    const [currentUser, setCurrentUser] = useState({
        name:"",
        id:"",
        effortDays:{items:[]},
        group_admin:{items:[]},
        group_member:{items:[]},})
    const [loader, setLoader] = useState(false)

    async function getCurrentUser(){
        setLoader(true)
        await API.graphql({ query: getUser, variables: { id: "d750fcb2-b2cf-4a26-9582-84523205e5e4"}})
            .then(result => setDataSetLoader(result.data.getUser, setCurrentUser))
            .catch(err => console.log(err))
    }

    function setDataSetLoader(data, setData){
        setData(data)
        setLoader(false)
    }
    
    useEffect(() => {
        getCurrentUser()
    }, [])

    return (
        <div>
            {loader && (
                <>
                    <h1>Loading</h1>
                </>
            )}
            {!loader && (
                <>
                    <h1>{currentUser.name}</h1>
                    <button onClick={()=>console.log(currentUser)}>Test again</button>
                    <h2>Groups</h2>
                    <h2>Friends</h2>
                    <h3>Scores</h3>

                    <div className='row wrap'>
                        {currentUser.effortDays.items.map((effort) => {
                            return(
                                <div >
                                    <h3>Day {effort.day}</h3>
                                    <h4>Score {effort.score}</h4>
                                    {effort.colourString.split(" ").map((row) => <p>{row}</p>)}
                                </div>
                            )
                        })}
                    </div>
                </>
            )}
        </div>
    )
}
