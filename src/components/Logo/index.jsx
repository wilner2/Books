import React from 'react';
import Logo, { Field, TitleLogo } from './styles';
import Preto from '../../assets/images/LogoPreto.png';
import Branco from '../../assets/images/LogoBranco.png';

export default function index(props) {
  if (props.theme === 'light') {
    return (
      <>
        <Field>
          <Logo src={Branco} />
          <TitleLogo theme={props.theme}>Book</TitleLogo>
        </Field>
      </>
    );
  }
  return (
    <>
      <Field>
        <Logo src={Preto} />
        <TitleLogo>Book</TitleLogo>
      </Field>
    </>
  );
}
