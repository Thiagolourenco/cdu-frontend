import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  border-radius: 20px;
  background: rgba(56, 103, 214, 0.9);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 40px;
  width: 920px;

  > h1 {
    text-align: center;
    color: #fff;
    font-size: 26px;
    font-weight: bold;
  }

  > div {
    display: flex;
    flex: 1;
    .image {
      background: rgba(196, 196, 196, 0.41);
      border-radius: 15px;
      display: flex;
      align-self: center;
      width: 153px;
      height: 144px;
    }

    > div {
      display: flex;
      flex-direction: column;

      > label {
        color: #fff;
        font-size: 16px;
        margin-left: 50px;
        margin-top: 20px;

        a {
          text-decoration: none;
          color: #fff;
          font-weight: bold;
        }
      }

      .rols {
        color: #fff;
        font-size: 16px;
        margin-left: 50px;
        margin-top: 20px;
        display: flex;
        flex: 1;

        .nasc {
          margin-left: 280px;
        }
      }
    }
  }
  .groupButton {
    display: flex;
    justify-content: center;
    margin-top: 30px;

    .aceita {
      border: 0;
      background: rgba(17, 87, 32, 0.54);
      width: 174px;
      height: 48px;
      border-radius: 15px;
      color: #fff;
      font-weight: bold;
    }

    .rejeita {
      border: 0;
      background: rgba(173, 86, 86, 0.83);
      width: 174px;
      height: 48px;
      border-radius: 15px;
      color: #fff;
      font-weight: bold;
      margin-left: 20px;
    }
  }
`;
