import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';
import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const schema = Yup.object().shape({
    name: Yup.string().required('Informe seu nome completo!'),
    email: Yup.string()
      .email('Insira um e-mail válido!')
      .required('Informe seu e-mail!'),
    password: Yup.string()
      .min(6, 'A senha deve conter no mínimo 6 caracteres!')
      .required('Informe sua senha secreta!'),
  });

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Seu nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">
          {loading ? 'Cadastrando...' : 'Criar conta'}
        </button>
        <Link to="/">Fazer login!</Link>
      </Form>
    </>
  );
}
