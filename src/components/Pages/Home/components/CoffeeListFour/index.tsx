import traditionalArabic from "../../../../../assets/traditionalArabic.svg";
import special from "../../../../../assets/special.svg";
import Button from "../../../../../assets/Button.svg";
import traditionalIrish from "../../../../../assets/traditionalIrish.svg";
import alcoholic from "../../../../../assets/alcoholic.svg";
import { CoffeesListFourContainer } from "./styles";

export function CoffeesListFour() {
  return (
    <>
      <CoffeesListFourContainer>
        <div className="background">
          <div className="quarterCoffee">
            <img className="coffee" src={traditionalArabic} alt="" />{" "}
            <div className="twoImgs">
              <img src={special} alt="" />
            </div>
            <h3>Árabe</h3>
            <p>
              Bebida preparada com grãos de <br /> &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;café árabe e especiarias
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
          <div className="quarterCoffee">
            <img className="coffee" src={traditionalIrish} alt="" />{" "}
            <div className="twoImgs">
              <img src={special} alt="" />
              <img src={alcoholic} alt="" />
            </div>
            <h3>Irlandês</h3>
            <p>
              Bebida a base de café, uísque <br /> &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;irlandês, açúcar e chantilly
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
      </CoffeesListFourContainer>
    </>
  );
}
