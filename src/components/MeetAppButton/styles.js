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
  disabled: props.loading || props.disabled,
}))`
  margin: 5px 0 0;
  height: 44px;

  font-size: 16px;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  transition: background 0.2s;

  ${props =>
    props.blue
      ? css`
          background: #4dbaf9;
        `
      : css`
          background: #f94d6a;
        `}

  div {
    display: flex;
    margin: 0 7px;
    padding: 0 7px;

    span {
      font-size: 16px;
      color: #fff;
      margin-left: 6px;
      padding-left: 6px;
    }
  }

  &:hover {
    ${props =>
      props.blue
        ? css`
            background: ${darken(0.08, '#4dbaf9')};
          `
        : css`
            background: ${darken(0.08, '#f94d6a')};
          `}
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

//   background: #f94d6a;
