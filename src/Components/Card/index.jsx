import Div from "./style";

export function Card(props) {
    return (
        <Div>
            <h1>{props.title}</h1>
            {props.children}
        </Div>
    )
}