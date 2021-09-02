import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExchangeAlt} from "@fortawesome/free-solid-svg-icons";

import {ConverterContextProvider} from "../../Hooks/useConverter";
import {Card} from "../Card"

import Div from "./style"
import {useCallback, useEffect, useRef, useState} from "react";
import {csvToJSON} from "./csvToJSON";

function Converter() {
    const [output, setOutput] = useState("")

    const inputRef = useRef()

    const convert = useCallback(({target}) => {
        const value = target.innerText
        const newOutput = csvToJSON(value)
        setOutput(newOutput)
    }, [])

    useEffect(()=>{
        const {current} = inputRef
        current.addEventListener("input", convert)

        return () => current.removeEventListener("input", convert)
    }, [convert, inputRef])

    return (
        <ConverterContextProvider>
            <Div>
                <Card title={"CSV"}>
                    <div contentEditable={true} ref={inputRef}/>
                </Card>

                <FontAwesomeIcon icon={faExchangeAlt}/>

                <Card title={"JSON"}>
                    <div>
                        <pre>{output}</pre>
                    </div>
                </Card>
            </Div>
        </ConverterContextProvider>
    )
}

export default Converter