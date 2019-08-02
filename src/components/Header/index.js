import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, Profile, LogoutButton } from './styles';
import logoHeader from '~/assets/logo-header.png';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

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
          <LogoutButton>Logout</LogoutButton>
        </aside>
      </Content>
    </Container>
  );
}
