import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 10px 0px  10px 15px;
  margin: 16px;
  width: 272px;
  height: 175px;
  background: #fff;
  border-radius: 4px;
  color: #333333;
  line-height: 20px;
  align-items: center;
  img {
    width: 81px;
    height: 122px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
    p {
      color: #ab2680;
    }
    span {
      font-size: 12px;
      color: #999999;
    }
  }
  &:hover {
    background: #e0d6ce;
    transform: scale(1.02);
    cursor: pointer;
  }
`;
export const ContainerHeader = styled.div`
  span {
      color: #ab2680 !important; 
      font-family: Heebo;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 20px;
      }
  div {
      margin-bottom: 15px;
      margin-left: 0px;
    }    
`;
export const ContentModal = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 5%;
  @media only screen and (max-width: 745px) {
    display: block;
  }
  @media only screen and (max-width: 462px) {
  width: 45vh;

  }
  @media only screen and (max-width: 462px) {
  width: 30vh;
  }
`;

export const BlockModalIMG = styled.div`
  margin:48px 0px 48px 48px;
    img{
      box-shadow: 0 0 10px black;
      @media only screen and (max-width: 774px) {
        width: 30vh;
      }
    }
`;

export const BlockModal = styled.div`
  margin:48px 0px 48px 48px;
  overflow: auto;
  height: 512px;
  width: 349px;
  &::-webkit-scrollbar {
    width: 9px;   
  }

  &::-webkit-scrollbar-track {
    background: transparent;        /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
  background: #AB2680;
  border-radius: 30px; 
  }
`;

export const Title = styled.div`
  span {
      color: #ab2680 !important; 
      font-family: Heebo;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 20px;
      }
  h1 {
    margin-bottom: 0;
  }
`;

export const Information = styled.div`
  margin: 35px 0 50px 0;
  strong{
    margin-bottom:300px
    }
  div{
    margin-top:20px ;
    p{
      display: flex;
      justify-content: space-between;
      margin: 4px;
      color: #999999;
    }
    span:first-child{
      font-weight: bold;
      color: black;
    }
  }
`;
export const Description = styled.div`
 span{
  color: #999999;
 }
  
`;

export default Container;
