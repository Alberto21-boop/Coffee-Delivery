import logo from "../../assets/Logo.svg";
import iconMaps from "../../assets/Icon.svg";
import cartBy from "../../assets/Cart.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="Logomarca na cor roxa escrito Coffee Delivery" />

        <div className="elementsToTheRightOfTheHeader">
          <img className="iconContainer" src={iconMaps} alt="ícone de mapa" />
          <h3>São Paulo,SP</h3>
          <div className="carContainer">
            <img
              className="car"
              src={cartBy}
              alt="imagem de carrinho de compras"
            />
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
}
