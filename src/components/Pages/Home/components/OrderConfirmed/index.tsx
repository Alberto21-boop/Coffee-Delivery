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
          <div className="card">
            <div className="lineOneFinish">
              <img src={location} alt="" />
              <h3>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{" "}
                <br /> Farrapos - Porto Alegre, RS
              </h3>
            </div>
            <div className="lineTwoFinish">
              <img src={timer} alt="" />
              <h3>
                Previsão de entrega <br /> <strong>20 min - 30 min</strong>{" "}
              </h3>
            </div>

            <div className="lineTreeFinish">
              <img src={moneyPay} alt="" />
              <h3>
                Pagamento na entrega <br /> <strong>Cartão de Crédito</strong>{" "}
              </h3>
            </div>
          </div>
          <div className="biker">
            <img src={biker} alt="" />
          </div>
        </div>
      </OrderConfirmedContainer>
    </>
  );
}
