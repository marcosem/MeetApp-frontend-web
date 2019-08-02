import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

// import { FaSpinner } from 'react-icons/fa';
// import { SubmitButton } from '~/pages/_layouts/auth/styles';
import SubmitButton from '~/components/SubmitButton';
import logo from '~/assets/logo.png';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Enter your name'),
  email: Yup.string()
    .email('Enter a valid e-mail')
    .required('An e-mail address is required'),
  password: Yup.string()
    .min(6, 'Minimal of 6 characters for password')
    .required('Enter a password'),
});

export default function SignUp() {
  const dispatch = useDispatch();
  // const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="MeetApp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input name="password" type="password" placeholder="Password" />

        <SubmitButton>Create Account</SubmitButton>

        <Link to="/">Already have an account</Link>
      </Form>
    </>
  );
}

/*
        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? <FaSpinner size={16} color="#fff" /> : 'Create Account'}
        </SubmitButton>
*/
