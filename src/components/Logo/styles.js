import styled from 'styled-components';

const Logo = styled.img`
    float: left;
`;

export const TitleLogo = styled.span`
    float: left;
    display: inline-block;
    margin-left: 9px;
    font-family: Heebo;
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 35px;
    color: ${(props) => (props.theme === 'light' ? 'white' : 'black')};

`;

export const Field = styled.div`
    justify-content: left;
    width: 198px;
    height: 40px;
`;

export default Logo;
