import {useConverter} from "../Hooks/useConverter";
import Card from "./Card";

function Output(){
    const {state} = useConverter()
    const {output} = state

    return (
        <>
            {output && (
                <Card>
                    <div className={"output"}>{output}</div>
                    <div className="options"/>
                </Card>
            )}
        </>
    )
}

export default Output