import styled from "styled-components";
import {useConverter} from "../../Hooks/useConverter";
import Card from "./style";

const TextArea = styled.textarea`
  height: ${({lines}) => 20*(lines + 1)}px;
`

const Input = (props) => {
    const {state, dispatch} = useConverter()
    const {input} = state

    const handleSaveInput = (e) => {
        const {value} = e.target
        dispatch({type:"input", value})
        dispatch({type:"output", value})
    }

    return (
        <Card>
            <TextArea onChange={handleSaveInput} {...input} />
            <div className="options"/>
        </Card>
    )
}

export default Input