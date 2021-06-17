import styled from 'styled-components';

const Content = styled.div`
  color: black;
  background-color: transparent;
  display: flex;
  justify-content: center;
  margin: 10px;
  align-items: center;
  div {
    background-color: white;
  }
`;

export const ButtonClose = styled.div`
  button {
    cursor: pointer;
    margin: 30px;
    border-radius: 50%;
    padding: 7px;
    width: 40px;
    height: 40px;
    font-size: 20px;
    border-color: rgba(51, 51, 51, 0.2);
  }
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const ContainerBox = styled.div`
  box-shadow: 0 0 10px black;
  border-radius: 5%;
  @media only screen and (max-width: 462px) {
    overflow: auto;
    width: 39vh;
    &::-webkit-scrollbar {
      height: 9px;
    }
    &::-webkit-scrollbar-track {
      background: transparent; 
    }
    &::-webkit-scrollbar-thumb {
      background: #ab2680;
      border-radius: 30px;
    }
  }
`;

export default Content;
