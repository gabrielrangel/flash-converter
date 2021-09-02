import styled from "styled-components";

export default styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  flex-grow: 1;
  gap: 10vh;
  
  max-height: 100vh;
  
  
  strong {
    display: inline-block;
    
    font-family: "Secular One", sans-serif;
    color: #647c90;
    
    font-size: 2rem;
    
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    
    @media (min-width: 768px){
      font-size: 3rem;
    }
  }
`