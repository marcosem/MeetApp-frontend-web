// Loading Component created by Marcio: https://github.com/marciofrancalima/meetappweb
import styled, { css, keyframes } from 'styled-components';
import { darken } from 'polished';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SubButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  margin: 5px 0 0;
  height: 44px;
  background: #f94d6a;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.08, '#f94d6a')};
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
