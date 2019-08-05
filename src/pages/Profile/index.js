import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { FaPlusCircle } from 'react-icons/fa';
import { Container } from './styles';
import MeetAppButton from '~/components/MeetAppButton';
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

        <MeetAppButton type="submit" disabled={!hasChange}>
          <div>
            <FaPlusCircle size={14} color="#fff" />
            <span>Update profile</span>
          </div>
        </MeetAppButton>
      </Form>
    </Container>
  );
}
