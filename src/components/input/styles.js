import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 47vh;
  background: rgba(0, 0, 0, 0.32);
  border-radius: 4px;
  padding: 4px 10px 0px 15px;
  display: flex;
  @media only screen and (max-width: 561px) {
    flex-direction: column;
  }
  align-items: center;
  border: 1px solid transparent;
  diV{
    padding-bottom: 4px;
  }
  ${(props) => props.focused
    && css`
      border-color: #fff;
    `}
  & + div {
    margin-top: 14px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  div:first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    input {
      color: #FFFFFF;
      font-family: Heebo;
      font-style: normal;
      padding-bottom: 5px;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      background: transparent;
      flex: 1;
      padding-top: 9px;
      border: 0;
      width: 135%;
      line-height: 24px;
      outline: 0;
      &::placeholder {
        color: #9e8080;
      }
    }
  }
  
  
`;

export const Label = styled.label`
  font-family: Heebo;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #FFFFFF;
  opacity: 0.5
`;
