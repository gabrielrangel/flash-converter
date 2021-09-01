import {createContext, useContext, useReducer} from "react";
import {csvToJSON} from "../Scripts/csvToJSON";

const Context = createContext({})
const {Provider} = Context

const initialState = {
    input: {
        value: "",
        lines: 0
    },

    output: ""
}

function reducer (state, action) {
    switch (action.type){
        case "input":
            const {input} = state
            input.value = action.value
            input.lines = action.value.split(/\n/).length + 1
            return {...state, input}
        case "output":
            let json = csvToJSON(action.value)
            return {...state, output:json}
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