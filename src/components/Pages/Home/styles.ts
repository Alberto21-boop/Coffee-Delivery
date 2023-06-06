import styled from "styled-components";

export const HomeContainer = styled.div`
  & > div {
    display: flex;
    justify-content: center;
    margin-top: 94px;
    margin-left: 160px;
    gap: 50px;

    h1 {
      font-weight: 800;
      font-size: 48px;
      font-family: "Baloo 2", cursive;
    }

    p {
      font-weight: 400;
      font-size: 20px;
      margin-top: 10px;
    }
  }

  .firstElements {
    margin-top: -80px;
    margin-left: -390px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    img {
      margin-left: 25px;
    }
  }

  .secondElements {
    margin-top: 20px;
    margin-left: -395px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    img {
      margin-left: 19px;
    }
  }
`;
