import styled from "styled-components";

export default styled.div`
  flex-grow: 1;
  flex-basis: 30vmax;
  flex-shrink: 0;
  align-self: stretch;
  
  padding: 10px;
  gap: 10px;
  
  display: flex;
  flex-direction: column;
  
  background-color: #746c70;
  border-radius: 30px;
  
  overflow: scroll;
  
  h1 {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    left: 0;
    
    font-family: "Oswald", sans-serif;
    font-size: 2rem;
    text-align: center;
    background-color: #4e4f50;
    border-radius: 30px;
    color: #e2ded0;
  }
  
  div {
    font-family: "Roboto Mono", monospace;
    flex-grow: 1;
    flex-shrink: 0;
    background-color: transparent;
    
    border-radius: 30px;
    
    font-size: 1rem;
  }
  
  @media (min-width: 768px) {
    flex-basis: 30vw;
  }
`