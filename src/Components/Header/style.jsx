import styled from "styled-components";

export default styled.header`
  box-sizing: border-box;
  width: 100vw;
  
  padding: 5px 10px;
 
  position: fixed;
  top: 0;
  left: 0;
  
  display: flex;
  align-items: center;
  gap: 10px;
  
  .brand {
    display: ${({show}) => show ? "block" : "none"};
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    font-size: 24px;
    font-family: "Secular One", sans-serif;
  }
  
  nav {
    flex-grow: 1;
    
    height: 100%;
    
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    padding: 0 20px;
    
    font-size: 2rem;
  }
`