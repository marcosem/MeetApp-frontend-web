import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';
import SubmitButton from '~/components/SubmitButton';
import { updateProfileRequest } from '~/store/modules/user/actions';

export default function Profile() {
  const [hasChange, setHasChange] = useState(false);
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
    setHasChange(false);
  }

  function handleChange() {
    if (hasChange === false) {
      setHasChange(true);
    }
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input
          name="name"
          type="name"
          placeholder="Full Name"
          onChange={handleChange}
        />
        <Input
          name="email"
          type="email"
          placeholder="Your e-mail"
          onChange={handleChange}
        />

        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Your current password"
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="Your new password"
          onChange={handleChange}
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm your new password"
          onChange={handleChange}
        />

        <SubmitButton disabled={!hasChange}>Update profile</SubmitButton>
      </Form>
    </Container>
  );
}
