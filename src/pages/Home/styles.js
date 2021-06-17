import styled from 'styled-components';

import background from '../../assets/images/Home_Background.webp';

export const ListContainer = styled.div`
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1587px;
    margin: 0 auto;
    @media only screen and (max-width: 350px) {
      padding: 0;
    }
`;

const Container = styled.div`
  background: url(${background}) no-repeat center;
  background-size: cover;
  background-blend-mode: darken;
  color: #333333;
  padding-bottom: 20px;
  min-height: 100vh;
`;

export const Header = styled.header`
  padding: 32px 20px;
  color: #333333;
`;

export const ContainerHeader = styled.div`
  padding: 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  strong {
    font-weight: 700;
  }
  div {
    display: flex;
    align-items: center;
    button {
      margin-left: 20px;
      background: transparent;
      border: 0;
      cursor: pointer;
      svg {
        color: #333333;
      }
    }
  }
  @media only screen and (max-width: 550px) {
    span {
      display: none;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
  strong {margin-right:15px
  }
  button {
    cursor: pointer;
    background: transparent;
    border-radius: 50%;
    border-width: 1px;
    align-items: center;

    border-color: rgba(51, 51, 51, 0.2);
    svg {
      width: 20px;
      height: 30px;
    }
  }
  @media only screen and (max-width: 350px) {
    flex-direction: column;
  }
`;
export default Container;
