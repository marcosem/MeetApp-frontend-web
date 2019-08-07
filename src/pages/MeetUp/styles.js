import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

export const Container = styled.div`
  max-width: 900px;
  margin: 15px auto;

  display: flex;
  flex-direction: column;

  form {
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      width: 900px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 140px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      resize: none;
      line-height: 32px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      padding-top: 5px;
      margin-top: 5px;
      width: 180px;
      align-self: flex-end;
    }
  }
`;
