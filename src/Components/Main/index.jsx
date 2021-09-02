import StyledMain from './style'
import {useRef} from "react";

const Main = (props) => {
    const ref = useRef()

    return (
        <StyledMain>
            <div className="title">
                <strong ref={ref}>{props.title}</strong>
            </div>
            {props.children}
        </StyledMain>
    )
}

export default Main