import styled from 'styled-components';
// import PerfectScrollBar from 'react-perfect-scrollbar';

export const Container = styled.div`
  max-width: 900px;
  margin: 30px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;

    strong {
      color: #fff;
      font-size: 32px;
    }

    button {
      width: 172px;
    }
  }

  ul {
    display: grid;
    grid-gap: 15px;
    margin-top: 30px;
  }

  li {
    padding: 20px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;

    strong {
      display: block;
      color: #fff;
      font-size: 18px;
      font-weight: bold;
    }

    div {
      display: flex;
      flex-direction: row;

      span {
        margin-right: 15px;
        padding-right: 15px;
        display: block;
        font-size: 16px;
        font-weight: normal;

        color: #fff;
        opacity: 0.6;
      }

      button {
        border: 0;
        background: none;
      }
    }
  }
`;
