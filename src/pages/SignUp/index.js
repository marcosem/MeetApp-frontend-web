import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/logo.png';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="MeetApp" />

      <Form>
        <Input name="name" type="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input name="password" type="password" placeholder="Password" />
        <button type="submit">Create Account</button>
        <Link to="/">Already have an account</Link>
      </Form>
    </>
  );
}
