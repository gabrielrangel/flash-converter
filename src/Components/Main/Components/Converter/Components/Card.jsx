import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50%;
  flex-grow: 1;
  
  textarea,
  .output {
    margin: 20px;
    border: none;
    resize: none;
    font-size: 18px;
    line-height: 20px;
    
    min-height: 40px;
    flex-grow: 1;
    :focus {
      outline: none;
    }
  }
  
  .output span {
    display: block;
    padding: 0 20px;
  }
  
  .entry:not(.entry:last-child):after,
  .line:not(.line:last-child):after{
    content: ",";
  }
  
  :nth-child(3) {
    background-color: #eee;
  }
    
  .options {
    height: 50px;
  }
  
  :first-child{
    max-width: 100%;
    flex-grow: 1;
  }
`