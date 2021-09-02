import {createContext, useContext, useReducer} from "react";
import {csvToJSON} from "../Components/Converter/csvToJSON";

const Context = createContext({})
const {Provider} = Context

const initialState = {
    input: "",
    output: ""
}

function reducer (state, action) {
    const {value} = action
    switch (action.type){
        case "input":
            return {...state, input:value}
        case "output":
            return {...state, output:csvToJSON(value)}
        default:
            return state
    }
}

export function ConverterContextProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Provider value={{state, dispatch}}>{props.children}</Provider>
    )
}

export function useConverter () {
    return useContext(Context)
}