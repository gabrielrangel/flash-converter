import {useConverter} from "../../Hooks/useConverter";
import Card from "./style";

function Output(){
    const {state} = useConverter()
    const {output} = state

    return (
        <>
            {output && (
                <Card darker>
                    {output}
                    <div className="options"/>
                </Card>
            )}
        </>
    )
}

export default Output