import {ConverterContextProvider} from "./Hooks/useConverter";
import Input from "./Components/Input";
import Div from "./style"
import Output from "./Components/Output";

function Converter() {
    return (
        <ConverterContextProvider>
            <Div>
                <div className="options">
                    <div>A</div>
                    <div className="icon">x</div>
                    <div>B</div>
                </div>
                <Input/>
                <Output/>
            </Div>
        </ConverterContextProvider>
    )
}

export default Converter