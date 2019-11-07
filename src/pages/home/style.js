import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: column;
`;

export const Content = styled.ul`
  display: flex;
  height: 88px;
  width: 570px;
  background: rgba(255, 255, 255, 0.8);
  margin-top: 40px;
  align-self: center;
  justify-content: space-between;
  border-radius: 5px;
  flex-direction: row;
  padding-left: 10px;

  > li {
    display: flex;
    flex-direction: column;
    align-self: center;
    p {
      margin: 0;
      padding: 5px;
    }
  }

  > button {
    border: 0;
    background: transparent;
    margin-right: 20px;
  }
`;
