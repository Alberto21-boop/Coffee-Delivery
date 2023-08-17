import { NavLink } from "react-router-dom";
import LogoHeader from "../../assets/LogoHeader.svg"
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react"
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cartQuantity } = useCart()
  return (
    <HeaderContainer>

      <div className="container">
        <NavLink to="/">
          <img src={LogoHeader} alt="" />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton $variant="purple">
            <MapPin size={20} weight="fill" />
            São Paulo, SP
          </HeaderButton>

          <NavLink to="/CompleteOrder">
            <HeaderButton $variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>

        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}