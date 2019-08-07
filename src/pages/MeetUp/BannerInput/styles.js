import styled from 'styled-components';

export const Container = styled.div`
  width: 900px;
  height: 300px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  margin-bottom: 30px;

  &:hover {
    opacity: 0.7;
  }

  label {
    cursor: pointer;

    strong {
      display: flex;
      flex-direction: column;
      margin-top: 115px;
      align-items: center;
      opacity: 0.3;
      color: #fff;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 32px;
    }

    img {
      height: 300px;
      margin-left: auto;
      margin-right: auto;
      display: block;
      border-radius: 4px;
    }

    input {
      display: none;
    }
  }
`;
