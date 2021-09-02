import StyledHeader from "./style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {useBrandToggle} from "../../Hooks/useBrandToggler";

const Header = () => {
    const {showBrand} = useBrandToggle()

    return (
        <StyledHeader show={showBrand}>
            <div className={"brand"}>
                <strong>Fresh</strong>Converter
            </div>

            <nav>
                <a href="https://github.com/gabrielrangel/fresh-converter" target={"_blank"} rel="noreferrer" >
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </nav>
        </StyledHeader>
    )
}

export default Header