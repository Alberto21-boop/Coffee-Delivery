import traditionalEspresso from "../../../../../assets/traditionalEspresso.svg";
import traditional from "../../../../../assets/traditional.svg";
import chilled from "../../../../../assets/chilled.svg";
import Button from "../../../../../assets/Button.svg";
import traditionalAmerican from "../../../../../assets/traditionalAmerican.svg";
import traditionalCreamy from "../../../../../assets/traditionalCreamy.svg";
import traditionalChilled from "../../../../../assets/traditionalChilled.svg";
import { CoffeeListContainer } from "./styles";

export function CoffeesList() {
  return (
    <CoffeeListContainer>
      <div className="background">
        <div className="firstCoffee">
          <img className="coffee" src={traditionalEspresso} alt="" />
          <img src={traditional} alt="" />
          <h3>Expresso Tradicional</h3>
          <p>
            O tradicional café feito com água <br /> &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;quente e grãos moídos
          </p>
        </div>
      </div>

      <div className="price">
        <div>
          <p>R$</p>
          <h2>9,90</h2>
        </div>
        <div className="elements">
          <button className="firstButton">-</button>
          <span>0</span>
          <button className="secondButton">+</button>
        </div>
        <button className="buttonImg">
          <img src={Button} alt="" />
        </button>
      </div>

      <div className="background">
        <div className="firstCoffee">
          <img className="coffee" src={traditionalAmerican} alt="" />
          <img src={traditional} alt="" />
          <h3>Expresso Americano</h3>
          <p>
            Expresso diluído, menos intenso <br /> &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;que o tradicional
          </p>
        </div>
      </div>

      <div className="price">
        <div>
          <p>R$</p>
          <h2>9,90</h2>
        </div>
        <div className="elements">
          <button className="firstButton">-</button>
          <span>0</span>
          <button className="secondButton">+</button>
        </div>
        <button className="buttonImg">
          <img src={Button} alt="" />
        </button>
      </div>

      <div className="background">
        <div className="firstCoffee">
          <img className="coffee" src={traditionalCreamy} alt="" />
          <img src={traditional} alt="" />
          <h3>Expresso Cremoso</h3>
          <p>
            Café expresso tradicional com <br /> &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;espuma cremosa
          </p>
        </div>
      </div>

      <div className="price">
        <div>
          <p>R$</p>
          <h2>9,90</h2>
        </div>
        <div className="elements">
          <button className="firstButton">-</button>
          <span>0</span>
          <button className="secondButton">+</button>
        </div>
        <button className="buttonImg">
          <img src={Button} alt="" />
        </button>
      </div>

      <div className="background">
        <div className="firstCoffee">
          <img className="coffee" src={traditionalChilled} alt="" />
          <img className="type" src={chilled} alt="" />
          <img src={traditional} alt="" />
          <h3>Expresso Cremoso</h3>
          <p>
            Café expresso tradicional com <br /> &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;espuma cremosa
          </p>
        </div>
      </div>

      <div className="price">
        <div>
          <p>R$</p>
          <h2>9,90</h2>
        </div>
        <div className="elements">
          <button className="firstButton">-</button>
          <span>0</span>
          <button className="secondButton">+</button>
        </div>
        <button className="buttonImg">
          <img src={Button} alt="" />
        </button>
      </div>
    </CoffeeListContainer>
  );
}
