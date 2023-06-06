import styled from "styled-components";

export const CoffeeListContainer = styled.div`
  .firstCoffee {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 15px;
    margin-left: -900px;

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
    gap: 5px;
    margin-left: 57px;
    margin-top: 28px;

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

  button {
    all: unset !important;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;
    color: ${(props) => props.theme.purple};
    background-color: transparent;
    background: none;
    cursor: pointer;
  }
`;
