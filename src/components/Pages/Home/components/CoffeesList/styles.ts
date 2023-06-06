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

    button {
      all: unset;
      background-color: transparent;
      background: none;
      cursor: pointer;
    }
  }
`;
