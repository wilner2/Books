import React, { useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import Container, { ContainerLogo } from './styles';
import Logo from '../../components/Logo';
import Input from '../../components/input/index';
import Button from '../../components/button/index';
import { login } from '../../services/auth';
import api from '../../services/api';
import 'react-toastify/dist/ReactToastify.css';

export default function index(props) {
  const formRef = useRef(null);
  const handleSubmit = async (data) => {
    const { password, email } = data;
    const schema = Yup.object().shape({
      email: Yup.string()
        .required('Por favor preencher os campos corretamente')
        .email('Por favor preencher os campos corretamente'),
      password: Yup.string().required('Por favor preencher os campos corretamente'),
    });
    const isValid = await schema
      .validate({
        email,
        password,
      }).catch((e) => e);

    if (!isValid.name) {
      const response = await api.post('/auth/sign-in', { email, password }).catch((err) => ({ error: err.response }));
      if (response.error) {
        const { message } = response.error.data.errors;
        return toast.error(message);
      }
      login(response.headers.authorization, response.data);
      return props.history.push('/home');
    }
    return toast.info(isValid.errors[0]);
  };
  return (
    <div>
      <Container>

        <ContainerLogo>
          <Logo theme="light" />
        </ContainerLogo>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="email"
            type="email"
            label="E-mail"
            placeholder="Digite seu e-mail"
          />
          <Input
            name="password"
            type="password"
            label="password"
            placeholder="Digite sua senha"
          >
            <Button>Entrar</Button>
          </Input>
        </Form>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ToastContainer />
      </Container>
    </div>
  );
}
