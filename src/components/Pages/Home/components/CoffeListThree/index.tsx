import traditionalMocaccino from "../../../../../assets/traditionalMocaccino.svg";
import traditional from "../../../../../assets/traditional.svg";
import withMilk from "../../../../../assets/withMilk.svg";
import Button from "../../../../../assets/Button.svg";
import hotChocolate from "../../../../../assets/hotChocolate.svg";
import special from "../../../../../assets/special.svg";
import Cuban from "../../../../../assets/Cuban.svg";
import alcoholic from "../../../../../assets/alcoholic.svg";
import chilled from "../../../../../assets/chilled.svg";
import traditionalHawaiian from "../../../../../assets/traditionalHawaiian.svg";
import { CoffeeListThreeContainer } from "./styles";
import { CoffeesListFour } from "../CoffeeListFour";

export function CoffeeListThree() {
  return (
    <>
      <CoffeeListThreeContainer>
        <div className="background">
          <div className="threeCoffee">
            <img className="coffee" src={traditionalMocaccino} alt="" />{" "}
            <div className="twoImgs">
              <img src={traditional} alt="" />
              <img className="type" src={withMilk} alt="" />
            </div>
            <h3>Mocaccino</h3>
            <p>
              Café expresso com calda de <br /> &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;chocolate, pouco leite e espuma
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
          <div className="threeCoffee">
            <img className="coffee" src={hotChocolate} alt="" />{" "}
            <div className="twoImgs">
              <img src={special} alt="" />
              <img className="type" src={withMilk} alt="" />
            </div>
            <h3>Chocolate Quente</h3>
            <p>
              Bebida feita com chocolate <br /> &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;dissolvido no leite quente e café
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
          <div className="threeCoffee">
            <img className="coffee" src={Cuban} alt="" />{" "}
            <div className="twoImgs">
              <img src={special} alt="" />
              <img className="type" src={alcoholic} alt="" />
              <img src={chilled} alt="" />
            </div>
            <h3>Cubano</h3>
            <p>
              Drink gelado de café expresso <br /> &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;com rum, creme de leite e hortelã
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
          <div className="threeCoffee">
            <img className="coffee" src={traditionalHawaiian} alt="" />{" "}
            <div className="twoImgs">
              <img src={special} alt="" />
            </div>
            <h3>Havaiano</h3>
            <p>
              Bebida adocicada preparada com <br /> &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;café e leite de coco
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
      </CoffeeListThreeContainer>
      <CoffeesListFour />
    </>
  );
}
