import styled from "styled-components";

export default styled.div`
  flex-grow: 1;
  width: 95vw;
  border-radius: 30px;


  border: solid 2vw #4e4f50;
  background-color: #4e4f50;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  
  overflow: hidden;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  
  transition: 1s;
  
  svg {
    box-sizing: border-box;
    background-color: #746c70;
    border-radius: 100px;
    border: solid 10px #746c70;
    
    font-size: 2.5rem;
    
    path {
      fill: #e2ded0;
    }
  }
  
  @media (min-width: 375px) {
    margin-bottom: 5vw;
    width: 90vw;
  }
  
  @media (min-width: 768px) {
    flex-direction: row;
    width: 80vw;
  }
`