import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  width: 100%;
  overflow: hidden;
  
  .options {
    width: 100%;
    height: 50px;
    border-bottom: solid 1px #ddd;


    display: flex;
    align-items: center;
    
    * {
      flex-grow: 1;
      display: flex;
      justify-content: center;
    }
    
    .icon {
      flex-grow: 0;
    }
  }
  
  @media (min-width: 715px) {
    flex-direction: row;
    flex-wrap: wrap;
    
    margin: 10px;
  }
  
  @media (min-width: 1280px) {
    width: 80%;
    border-radius: 8px;
  }
`