import React, { useState } from "react";

const newContext = React.createContext()

function Provider(props){
    const [personajes, setPersonajes] = useState([])

    return(
        <newContext.Provider value={{
            personajes,
            setPersonajes,
        }}>
            {props.children}
        </newContext.Provider>
    )
}

export {newContext, Provider}