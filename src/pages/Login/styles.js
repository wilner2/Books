import styled from 'styled-components';
import Background from '../../assets/images/Background.png';

const Container = styled.div`
  background: url(${Background}) no-repeat center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  place-content: center;
  padding-left: 12vh;
  @media only screen and (max-width: 242px) {
    padding-left: 5vh;
  }
`;
export const ContainerLogo = styled.div`
  margin-bottom: 50px;
`;
export default Container;
