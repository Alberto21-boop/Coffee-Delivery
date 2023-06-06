import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 32px;

  & > div {
    display: flex;
    justify-content: space-around;
    align-items: center;

    gap: 820px;
    margin-left: 40px;
  }

  .elementsToTheRightOfTheHeader {
    display: flex;
    align-items: center;
    width: 131px;
    height: 40px;
    border-radius: 7px;
    gap: 5px;

    background: ${(props) => props.theme["purple-light"]};
    color: ${(props) => props.theme["purple-dark"]};

    font-size: 11px;

    font-family: "Bebas Neue", sans-serif;
    font-family: "Roboto", sans-serif;
    font-family: "Roboto Mono", monospace;

    .iconContainer {
      margin-left: 10px;
    }

    .carContainer {
      margin-left: 20px;
    }

    h3 {
      margin-left: 5px;
      white-space: nowrap;
      font-family: "Roboto";
      width: 400px;
    }
  }
`;
