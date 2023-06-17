import { Header } from "../../../../Header";
import location from "../../../../../assets/location.svg";
import timer from "../../../../../assets/timer.svg";
import moneyPay from "../../../../../assets/moneyPay.svg";
import biker from "../../../../../assets/biker.svg";
import { OrderConfirmedContainer } from "./styles";

export function OrderConfirmed() {
  return (
    <>
      <Header />
      <OrderConfirmedContainer>
        <div className="subHeaderOrder">
          <h1>Uhu! Pedido confirmado</h1>
          <h3>Agora é só aguardar que logo o café chegará até você</h3>
        </div>
        <div className="center">
          <div className="Card">
            <div className="lineOneFinish">
              <h3>
                <img src={location} alt="" />
                Entrega em Rua João Daniel Martinelli, 102 <br /> Farrapos -
                Porto Alegre, RS
              </h3>
            </div>
            <div>
              <h3>
                <img src={timer} alt="" />
                Previsão de entrega 20 min - 30 min
              </h3>
            </div>

            <div>
              <h3>
                <img src={moneyPay} alt="" />
                Pagamento na entrega Cartão de Crédito
              </h3>
            </div>
          </div>
          <div>
            <img src={biker} alt="" />
          </div>
        </div>
      </OrderConfirmedContainer>
    </>
  );
}
