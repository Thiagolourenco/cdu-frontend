import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  > div {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    label {
      padding-top: 20px;
      display: flex;
      flex-direction: row;
      background: rgba(196, 196, 196, 0.41);
      width: 425px;
      border-radius: 15px;
      padding: 15px;
      margin: 10px;

      input {
        display: flex;
        flex: 1;
        border: none;
        background: transparent;
        font-size: 16px;
        color: #000;
        margin-left: 8px;
      }
    }
  }

  button {
    width: 328px;
    padding: 15px;
    background: rgba(53, 79, 171, 0.94);
    margin-top: 20px;
    border-radius: 15px;
    border: 0;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background: rgba(53, 79, 171, 0.7);
    }
  }
`;
