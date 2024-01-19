import styled from 'styled-components';

export const StyledAppContainer = styled.div`
  // .searchbutton {
  //   position: absolute;
  //   height: 38px;
  //   background: none;
  //   border: none;
  // }
  
  .movielist {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    padding: 0;
  }
  .movieitem {
    display: flex;
    flex-direction: column;
  }
  .movietitle {
    max-width: 250px;
  }
  .page-title {
    text-align: center;
  }
  .searchbtn {
    display: flex;
    justify-content: center;
    align-items: center;
  padding: 0 20px;
  margin: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  // width: 72px;
  height: 34px;
  margin-bottom: 20px;
  &:hover {
    background-color: #0056b3;

  }
  
`;
