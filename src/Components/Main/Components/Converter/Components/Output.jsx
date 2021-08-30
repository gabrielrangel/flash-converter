import {useConverter} from "../Hooks/useConverter";
import Card from "./Card";

function Output(){
    const {state} = useConverter()
    const {output} = state

    return (
        <>
            {output && (
                <Card>
                    {output}
                    <div className="options"/>
                </Card>
            )}
        </>
    )
}

export default Output