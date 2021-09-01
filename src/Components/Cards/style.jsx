import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 50%;
  background-color: ${({darker}) => darker ? "#fff8" : "none"};
  color: #4D5D53;
  font-family: "Roboto", sans-serif;
  
  textarea,
  .output {
    margin: 20px;
    border: none;
    resize: none;
    background-color: #aaa0;
    font-size: 1.5rem;
    
    min-height: 40px;
    flex-grow: 1;
    :focus {
      outline: none;
    }
  }
  
  code {
    font-family: "Roboto Mono", monospace;
  }
  
  .output span {
    display: block;
    padding: 0 20px;
  }
  
  .entry:not(.entry:last-child):after,
  .line:not(.line:last-child):after{
    content: ",";
  }
    
  .options {
    height: 50px;
    
    * {
      font-family: "Oswald", sans-serif;
      font-weight: 600;
    }
  }
`