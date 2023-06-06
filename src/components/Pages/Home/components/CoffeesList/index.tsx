import traditionalEspresso from "../../../../../assets/traditionalEspresso.svg";
import traditional from "../../../../../assets/traditional.svg";
import Button from "../../../../../assets/Button.svg";
import { CoffeeListContainer } from "./styles";

export function CoffeesList() {
  return (
    <CoffeeListContainer>
      <div className="firstLine">
        <div className="firstCoffee">
          <img src={traditionalEspresso} alt="" />
          <img src={traditional} alt="" />
          <h3>Expresso Tradicional</h3>
          <p>
            O tradicional café feito com água <br /> &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;quente e grãos moídos
          </p>
        </div>
        <div className="bottomElements">
          <p>R$ 9,90</p>
          <button>-</button>
          <span id="number">0</span>
          <button>+</button>
          <button>
            <img src={Button} alt="" />
          </button>
        </div>
      </div>
    </CoffeeListContainer>
  );
}
