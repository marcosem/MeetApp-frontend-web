import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { FaSpinner } from 'react-icons/fa';
import { SubmitButton } from '~/pages/_layouts/auth/styles';

import { signInRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid e-mail')
    .required('An e-mail address is required'),
  password: Yup.string().required('Enter a password'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="MeetApp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input name="password" type="password" placeholder="Password" />

        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? <FaSpinner size={16} color="#fff" /> : 'Login'}
        </SubmitButton>

        <Link to="/register">Create an account</Link>
      </Form>
    </>
  );
}

/*
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input name="password" type="password" placeholder="Password" />
        <button type="submit">{loading ? 'Loading...' : 'Login'}</button>
        <Link to="/register">Create an account</Link>
      </Form>
*/
