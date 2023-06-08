import styled from "styled-components";

export const CoffeeListTwoContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 50px;

  .background {
    width: 256px;
    height: 310px;
    background: ${(props) => props.theme["base-card"]};

    border-radius: 6px 36px;
  }

  .secondaryCoffee {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: -2px;
    margin-left: -3px;

    .twoImgs {
      display: flex;
      gap: 10px;
      margin-top: 3px;
    }

    .coffee {
      margin-top: -18px;
    }

    gap: 10px;

    h3 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      font-family: "Roboto";

      color: ${(props) => props.theme["base-label"]};
    }
  }

  .price {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 23px;
    margin-left: 28px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;

    .elements {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;

      margin-top: -8px;
      margin-left: 5px;

      width: 80px;
      height: 38px;
      background: ${(props) => props.theme["base-button"]};
      border-radius: 5px;

      .firstButton {
        color: ${(props) => props.theme["purple-dark"]};
        font-size: 30px;
        margin-left: 9px;
      }

      .secondButton {
        color: ${(props) => props.theme["purple-dark"]};
        font-size: 30px;
      }
    }

    button {
      all: unset;

      padding: 8px;
      gap: 4px;

      cursor: pointer;
    }

    .buttonImg {
      margin-left: -5px;
      margin-top: -5px;
    }

    & > div {
      display: flex;

      p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        margin-top: 6px;
        margin-right: 5px;
        color: ${(props) => props.theme["base-subtitle"]};
      }

      h2 {
        font-family: "Baloo 2";
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 130%;
        color: ${(props) => props.theme["base-subtitle"]};
      }
    }
  }
`;
