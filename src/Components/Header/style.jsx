import styled from "styled-components";

export default styled.header`
  box-sizing: border-box;
  width: 100vw;
  height: 50px;
  
  padding: 5px 10px;
 
  position: fixed;
  top: 0;
  left: 0;
  
  background-color: #fff;
  border-bottom: solid 1px #ddd;
  
  display: flex;
  align-items: center;
  gap: 10px;
  
  .brand {
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    font-size: 24px;
  }
  
  nav {
    flex-grow: 1;
    
    height: 100%;
    
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
  }
`