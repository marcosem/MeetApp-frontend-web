import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/logo.png';
import MeetAppButton from '~/components/MeetAppButton';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid e-mail')
    .required('An e-mail address is required'),
  password: Yup.string().required('Enter a password'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="MeetApp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input name="password" type="password" placeholder="Password" />

        <MeetAppButton type="submit">Login</MeetAppButton>

        <Link to="/register">Create an account</Link>
      </Form>
    </>
  );
}
