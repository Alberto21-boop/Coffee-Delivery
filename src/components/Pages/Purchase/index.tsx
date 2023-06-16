import { Header } from "../../Header";
import { ButtonContainer, CardContainer, PurchaseContainer } from "./styles";
import markMap from "../../../assets/markMap.svg";
import dolarIcon from "../../../assets/dolarIcon.svg";
import creditCard from "../../../assets/creditCard.svg";
import debitCard from "../../../assets/debitCard.svg";
import money from "../../../assets/money.svg";
import traditionalEspresso from "../../../assets/traditionalEspresso.svg";
import trash from "../../../assets/trash.svg";
/* import { useForm } from "react-hook-form"; */

export function Purchase() {
  /*  const { register, handleSubmit } = useForm(); */
  return (
    <>
      <PurchaseContainer>
        <Header />
        <div className="subHeader">
          <h1>Complete seu pedido</h1>

          <h1>Cafés selecionados</h1>
        </div>

        <div>
          <div className="cardOne">
            <h2>
              <img src={markMap} alt="" />
              Endereço de Entrega
            </h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>
            <form action="">
              <label htmlFor="CEP"></label>
              <input type="number" id="CEP" placeholder="CEP" className="CEP" />

              <label htmlFor="street"></label>
              <input
                type="text"
                id="street"
                placeholder="Rua"
                className="street"
              />

              <label htmlFor="number"></label>
              <input
                type="number"
                id="number"
                placeholder="Numero"
                className="number"
              />

              <label htmlFor="complement"></label>
              <input
                type="text"
                id="complement"
                placeholder="Complemento"
                className="complement"
              />

              <label htmlFor="district"></label>
              <input
                type="text"
                id="district"
                placeholder="Bairro"
                className="district"
              />

              <label htmlFor="city"></label>
              <input
                type="text"
                id="city"
                placeholder="Cidade"
                className="city"
              />

              <label htmlFor="UF"></label>
              <input type="text" id="UF" placeholder="UF" className="UF" />
            </form>
          </div>
        </div>

        <CardContainer>
          <div>
            <div className="cardTwo">
              <div className="productOne">
                <h3>
                  <img className="imageOne" src={traditionalEspresso} alt="" />
                  Expresso Tradicional
                </h3>
                <div className="price">
                  <div className="elements">
                    <div className="buttons">
                      <button className="firstButton">-</button>
                      <span>1</span>
                      <button className="secondButton">+</button>
                    </div>
                    <button className="trashButton">
                      <img src={trash} alt="" /> REMOVER
                    </button>
                  </div>

                  <div className="priceElements">
                    <h2>R$</h2>
                    <h2>9,90</h2>
                  </div>
                </div>

                <hr className="hrStyle" />
              </div>
              <button></button>
            </div>
          </div>
        </CardContainer>
        <ButtonContainer>
          <h1>
            <img src={dolarIcon} alt="" />
            Pagamento
          </h1>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>

          <div className="buttonElements">
            <button>
              <img src={creditCard} alt="" /> CARTÃO DE CRÉDITO
            </button>
            <button>
              <img src={debitCard} alt="" /> CARTÃO DE DÉBITO
            </button>
            <button>
              <img src={money} alt="" /> DINHEIRO
            </button>
          </div>
        </ButtonContainer>
      </PurchaseContainer>
    </>
  );
}
