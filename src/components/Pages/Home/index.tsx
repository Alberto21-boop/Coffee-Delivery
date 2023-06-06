import coffeeImage from "../../../assets/Imagem.svg";
import simplePurchase from "../../../assets/simplePurchase.svg";
import packaging from "../../../assets/packaging.svg";
import delivery from "../../../assets/delivery.svg";
import fresh from "../../../assets/fresh.svg";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <div>
        <div>
          <h1>
            Encontre o café perfeito <br /> para qualquer hora do dia
          </h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a <br />{" "}
            qualquer hora
          </p>
        </div>
        <img src={coffeeImage} alt="Imagem de um copo de café" />
      </div>

      <span className="firstElements">
        <img src={simplePurchase} alt="" /> <p>Compra simples e segura</p>
        <img src={packaging} alt="" /> <p>Embalagem mantém o café intacto</p>
      </span>
      <span className="secondElements">
        <img src={delivery} alt="" /> <p>Entrega rápida e rastreada</p>
        <img src={fresh} alt="" /> <p>O café chega fresquinho até você</p>
      </span>
    </HomeContainer>
  );
}
