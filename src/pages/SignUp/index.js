import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

// import { FaSpinner } from 'react-icons/fa';
import logo from '~/assets/logo.png';

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
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="MeetApp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input name="password" type="password" placeholder="Password" />
        <button type="submit">Create Account</button>
        <Link to="/">Already have an account</Link>
      </Form>
    </>
  );
}
