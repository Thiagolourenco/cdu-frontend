import styled from "styled-components";

export const Container = styled.header`
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  height: 80px;
  margin: 0;
  align-items: center;
  justify-content: space-between;
  padding: 0;

  > div {
    display: flex;
    flex-direction: row;
    margin-left: 30px;
    img {
      height: 59px;
      width: 58px;
    }

    p {
      font-size: 18;
      font-weight: bold;
      margin-left: 10px;
      color: rgba(0, 0, 0, 0.7);
    }
  }

  div {
    margin-right: 30px;

    button {
      border: 0;
      background: transparent;
    }
  }
`;
