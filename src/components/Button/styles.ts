import { styled } from "styled-components";

export const ButtonContainer = styled.button`
  padding: 0.75rem 2.8rem;
  color: ${(props) => props.theme.colors["base-white"]};
  font-weight: 700;
  background: ${(props) => props.theme.colors["brand-yellow"]};
  font-size: ${(props) => props.theme.textSizes["components-button-g"]};
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  transition: 0.4s;
  line-height: 1.3rem;
  margin-top: 0.7rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors["brand-yellow-dark"]};
  }
`;
