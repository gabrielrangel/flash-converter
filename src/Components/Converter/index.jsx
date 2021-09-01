import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExchangeAlt} from "@fortawesome/free-solid-svg-icons";

import {ConverterContextProvider} from "../../Hooks/useConverter";
import {Input, Output} from "../Cards"

import Div from "./style"

function Converter() {
    return (
        <ConverterContextProvider>
            <Div>
                <div className="app-header">
                    <div>CSV</div>
                    <div className="no-grow">
                        <FontAwesomeIcon icon={faExchangeAlt}/>
                    </div>
                    <div>JSON</div>
                </div>

                <div className="io">
                    <Input/>
                    <Output/>
                </div>
            </Div>
        </ConverterContextProvider>
    )
}

export default Converter