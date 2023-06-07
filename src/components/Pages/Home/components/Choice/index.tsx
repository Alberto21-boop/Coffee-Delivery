import { CoffeesList } from "../CoffeesList";
import { ChoiceContainer } from "./styles";

export function Choice() {
  return (
    <ChoiceContainer>
      <h2>Nossos cafés</h2>
      <CoffeesList />
    </ChoiceContainer>
  );
}
