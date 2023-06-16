import styled from "styled-components";

export const PurchaseContainer = styled.div`
  .subHeader {
    gap: 200px;
    margin-top: 144px;
    margin-right: 430px;
    margin-left: 8px;

    h1 {
      width: 197px;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 130%;

      display: flex;
      align-items: center;
      margin-left: 268px;

      font-family: "Baloo 2";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 130%;

      display: flex;
      align-items: center;
    }
  }

  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .cardOne {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 40px;

      width: 610px;
      height: 390px;

      background: ${(props) => props.theme["base-card"]};

      margin-left: -360px;
      margin-top: 10px;

      h2 {
        display: flex;
        align-items: center;

        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;

        margin-top: -20px;

        gap: 5px;
      }

      p {
        margin-top: 10px;
        margin-bottom: 22px;
      }

      input {
        width: 200px;
        height: 42px;
        background: ${(props) => props.theme["base-input"]};
        border: 1px solid ${(props) => props.theme["base-button"]};

        margin-bottom: 16px;

        padding-left: 10px;
      }

      input.CEP {
        margin-right: 200px;
      }

      input.street {
        width: 540px;
      }

      input.number {
        margin-right: 12px;
      }

      input.complement {
        width: 328px;
      }

      input.district {
        margin-right: 12px;
      }

      input.city {
        width: 250px;
      }

      input.UF {
        width: 68px;
        margin-left: 10px;
      }
    }
  }
`;

export const CardContainer = styled.div`
  .cardTwo {
    width: 448px;
    height: 498px;
    background: ${(props) => props.theme["base-card"]};
    border-radius: 6px 44px;

    margin-left: 765px;
    margin-top: -390px;

    .productOne {
      display: flex;
      margin-top: -330px;
      margin-left: 15px;

      .imageOne {
        width: 64px;
        height: 64px;
        margin-right: 10px;
        margin-left: -8px;
      }

      h3 {
        display: flex;
        gap: 10px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
        white-space: nowrap;
        margin-right: 60px;
        margin-left: 6px;
      }

      .elements {
        display: flex;
        gap: 13px;
        margin-top: 30px;
        margin-left: -210px;

        button {
          border: none;
          background: ${(props) => props.theme["base-button"]};
          color: ${(props) => props.theme.purple};

          gap: 4px;
          border-radius: 6px;
        }

        .buttons {
          background: ${(props) => props.theme["base-button"]};

          width: 72px;
          height: 32px;

          border-radius: 6px;
        }

        .trashButton {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-left: -4px;

          width: 110px;
          height: 32px;

          background: ${(props) => props.theme["base-button"]};

          img {
            margin-left: 5px;
          }

          color: ${(props) => props.theme["font-button"]};
        }
      }

      .hrStyle {
        width: 368px;

        margin-top: 140px;
        margin-left: -350px;

        border: 1px solid;
        border-color: ${(props) => props.theme["base-button"]};
      }
    }

    .priceElements {
      width: 55px;
      height: 21px;

      margin-top: -40px;
      margin-left: 40px;
      gap: 5px;

      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 130%;

      color: ${(props) => props.theme["font-button"]};
    }
  }

  .productTwo {
    display: flex;
    margin-top: -50px;
    margin-left: -300px;

    .imageOne {
      width: 64px;
      height: 64px;
      margin-right: 10px;
      margin-left: -8px;
    }

    h3 {
      display: flex;
      gap: 10px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      white-space: nowrap;
      margin-right: 60px;
      margin-left: -88px;
    }

    .elements {
      display: flex;
      gap: 13px;
      margin-top: 30px;
      margin-left: -100px;

      button {
        border: none;
        background: ${(props) => props.theme["base-button"]};
        color: ${(props) => props.theme.purple};

        gap: 4px;
        border-radius: 6px;
      }

      .buttons {
        background: ${(props) => props.theme["base-button"]};

        width: 72px;
        height: 32px;

        border-radius: 6px;
      }

      .trashButton {
        display: flex;
        align-items: center;
        gap: 5px;
        margin-left: -4px;

        width: 110px;
        height: 32px;

        background: ${(props) => props.theme["base-button"]};

        img {
          margin-left: 5px;
        }

        color: ${(props) => props.theme["font-button"]};
      }
    }

    .hrStyle {
      width: 368px;

      margin-top: 140px;
      margin-left: -350px;

      border: 1px solid;
      border-color: ${(props) => props.theme["base-button"]};
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 615px;
  height: 237px;
  border-radius: 6px;
  margin-left: 271px;
  margin-top: -95px;
  background: ${(props) => props.theme["base-card"]};

  margin-bottom: 50px;

  h1 {
    display: flex;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    gap: 5px;

    margin-top: -140px;
    margin-left: 38px;
  }

  p {
    display: flex;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

    margin-top: -85px;
    margin-left: -85px;

    white-space: nowrap;
  }

  .buttonElements {
    display: flex;
    margin-top: 100px;
    margin-left: -450px;
    margin-right: 30px;
    gap: 12px;

    button {
      display: flex;
      align-items: center;
      width: 178.67px;
      height: 51px;

      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 160%;

      color: ${(props) => props.theme["font-button"]};
      background: ${(props) => props.theme["base-button"]};

      border: none;
      border-radius: 6px;

      img {
        margin-left: 20px;
        margin-right: 10px;
      }
    }
  }
`;
