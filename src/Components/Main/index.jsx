import StyledMain from './style'
import {useEffect, useRef} from "react";
import {useBrandToggle} from "../../Hooks/useBrandToggler";

const Main = (props) => {
    const ref = useRef()
    const {toggleBrand, showBrand} = useBrandToggle()

    useEffect(()=>{
        document.addEventListener("scroll", () => {
            const {current} = ref
            const {bottom} = current.getBoundingClientRect()

            showBrand && bottom > 50 && toggleBrand()
            !showBrand && bottom < 50 && toggleBrand()

        })
    },[ref, toggleBrand, showBrand])

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