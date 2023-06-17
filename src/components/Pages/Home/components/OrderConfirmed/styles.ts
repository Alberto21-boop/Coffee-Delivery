import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
  .subHeaderOrder {
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    margin-left: 268px;
    gap: 5px;

    h1 {
      font-family: "Baloo 2";
      font-style: normal;
      font-weight: 800;
      font-size: 32px;
      line-height: 130%;

      color: ${(props) => props.theme["yellow-dark"]};
    }

    h3 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 130%;

      color: ${(props) => props.theme["base-subtitle"]};
    }
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3px;
  }

  .card {
    display: flex;

    flex-direction: column;

    padding: 40px;
    gap: 32px;

    position: absolute;
    width: 526px;
    height: 270px;
    left: calc(50% - 526px / 2 - 297px);

    border-radius: 6px 36px;

    .lineOneFinish {
      display: flex;
      .lineOneFinish > h3 {
        display: flex;
        align-items: center;
      }
    }
  }
`;
