import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #000;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

// border-left: 1px solid #eee;
export const Profile = styled.div`
  display: flex;
  margin-right: 15px;
  padding-right: 15px;

  div {
    text-align: right;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }
`;

export const LogoutButton = styled.button.attrs({
  type: 'button',
})`
  width: 71px;
  height: 44px;
  background: #d44056;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.08, '#d44056')};
  }
`;
