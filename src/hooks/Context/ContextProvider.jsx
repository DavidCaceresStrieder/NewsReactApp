import { useState } from "react"
import { Context } from "./Context"

export const ContextProvider = ({children}) => 
{
    const [ user , setUser ] = useState();

    return (
        <Context.Provider value={ { user , setUser}}>
            { children }
        </Context.Provider>
    )
}
