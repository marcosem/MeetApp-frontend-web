import styled from 'styled-components';

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

    div {
      button {
        padding-left: 15px;
        margin-left: 15px;
        width: 138px;
      }
    }
  }
`;

export const MeetupBody = styled.div`
  strong {
    color: #fff;
    margin-top: 30px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
  }
`;

export const FooterData = styled.div`
  display: flex;
  flex-direction: row;

  div {
    margin-top: 30px;

    span {
      margin-left: 10px;
      color: #fff;
      opacity: 0.6;
      font-size: 16px;
      margin-top: 30px;
      text-align: left;
      font-weight: normal;
    }

    & + div {
      margin-left: 50px;
    }
  }
`;

export const ImageDiv = styled.div`
  margin: 40px auto;
  width: 900px;
  height: 300px;

  img {
    margin-left: auto;
    margin-right: auto;
    display: block;
    height: 300px;
    border-radius: 4px;
  }
`;
