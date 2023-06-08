import TraditionalCoffeeWithMilk from "../../../../../assets/TraditionalCoffeeWithMilk.svg";
import traditional from "../../../../../assets/traditional.svg";
import withMilk from "../../../../../assets/withMilk.svg";
import Button from "../../../../../assets/Button.svg";
import traditionalLatte from "../../../../../assets/traditionalLatte.svg";
import traditionalCapuccino from "../../../../../assets/traditionalCapuccino.svg";
import traditionalMacchiato from "../../../../../assets/traditionalMacchiato.svg";
import { CoffeeListTwoContainer } from "./styles";
import { CoffeeListThree } from "../CoffeListThree";

export function CoffeesListTwo() {
  return (
    <>
      <CoffeeListTwoContainer>
        <div className="background">
          <div className="secondaryCoffee">
            <img className="coffee" src={TraditionalCoffeeWithMilk} alt="" />{" "}
            <div className="twoImgs">
              <img src={traditional} alt="" />
              <img className="type" src={withMilk} alt="" />
            </div>
            <h3>Café com Leite</h3>
            <p>
              Meio a meio de expresso <br /> &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;tradicional com leite vaporizado
            </p>
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
        </div>

        <div className="background">
          <div className="secondaryCoffee">
            <img className="coffee" src={traditionalLatte} alt="" />{" "}
            <div className="twoImgs">
              <img src={traditional} alt="" />
              <img className="type" src={withMilk} alt="" />
            </div>
            <h3>Latte</h3>
            <p>
              Uma dose de café expresso com o <br /> &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;dobro de leite e espuma cremosa
            </p>
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
        </div>

        <div className="background">
          <div className="secondaryCoffee">
            <img className="coffee" src={traditionalCapuccino} alt="" />{" "}
            <div className="twoImgs">
              <img src={traditional} alt="" />
              <img className="type" src={withMilk} alt="" />
            </div>
            <h3>Capuccino</h3>
            <p>
              Café expresso misturado com um <br /> &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;pouco de leite quente e espuma
            </p>
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
        </div>

        <div className="background">
          <div className="secondaryCoffee">
            <img className="coffee" src={traditionalMacchiato} alt="" />{" "}
            <div className="twoImgs">
              <img src={traditional} alt="" />
              <img className="type" src={withMilk} alt="" />
            </div>
            <h3>Macchiato</h3>
            <p>
              Bebida com canela feita de doses <br /> &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;iguais de café, leite e espuma
            </p>
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
        </div>
      </CoffeeListTwoContainer>
      <CoffeeListThree />
    </>
  );
}
