import styled from "styled-components";

export default styled.div`
  background-color: #fff6;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  
  width: 100%;
  overflow: hidden;
  
  display: flex;
  flex-direction: column;
  align-items: stretch;
  
  .app-header {
    display: flex;
    align-items: center;
    
    margin: 1em;
    
    * {
      display: flex;
      justify-content: center;
      
      font-family: "Oswald", sans-serif;
      font-weight: 600;
      color: #004953;
    }
    
    > * {
      font-size: 3em;
    }
    
    *:not(.no-grow) {
      flex-grow: 1;
    }
  }
  
  .io {
    display: flex;
    flex-direction: column;
  }
  
  transition: all 1s ease-in-out;
  
  @media (min-width: 768px) {
    margin: 1em;
    
    .io {
      flex-direction: row;
    }
  }
  
  @media (min-width: 992px) {
    max-width: 90%;
    border-radius: 30px;
  }
`