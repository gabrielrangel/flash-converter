import StyledFooter from './style'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
    <StyledFooter>
        <p>Design with <FontAwesomeIcon icon={faHeart}/> by Gabriel Rangel</p>
    </StyledFooter>
)

export default Footer
