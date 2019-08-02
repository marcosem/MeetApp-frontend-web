import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';
import { Container, Content, Profile, LogoutButton } from './styles';
import logoHeader from '~/assets/logo-header.png';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logoHeader} alt="MeetApp" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Profile</Link>
            </div>
          </Profile>
          <LogoutButton onClick={handleSignOut}>Logout</LogoutButton>
        </aside>
      </Content>
    </Container>
  );
}
