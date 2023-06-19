import traditionalEspresso from "../../../../../assets/traditionalEspresso.svg";
import traditional from "../../../../../assets/traditional.svg";
import chilled from "../../../../../assets/chilled.svg";
import Button from "../../../../../assets/Button.svg";
import traditionalAmerican from "../../../../../assets/traditionalAmerican.svg";
import traditionalCreamy from "../../../../../assets/traditionalCreamy.svg";
import traditionalChilled from "../../../../../assets/traditionalChilled.svg";
import { CoffeeListContainer } from "./styles";
import { CoffeesListTwo } from "../CoffeeListTwo";
import { useState, useEffect } from "react";

interface Coffee {
  id: number;
  image: string;
  type: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

export function CoffeesList() {
  const [coffees, setCoffees] = useState<Coffee[]>([
    {
      id: 1,
      image: traditionalEspresso,
      type: "",
      title: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
      quantity: 0,
    },
    {
      id: 2,
      image: traditionalAmerican,
      type: "",
      title: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: 9.9,
      quantity: 0,
    },
    {
      id: 3,
      image: traditionalCreamy,
      type: "",
      title: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      price: 9.9,
      quantity: 0,
    },
    {
      id: 4,
      image: traditionalChilled,
      type: chilled,
      title: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      price: 9.9,
      quantity: 0,
    },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);

  const handleDecreaseQuantity = (coffeeId: number) => {
    const updatedCoffees = coffees.map((coffee) => {
      if (coffee.id === coffeeId && coffee.quantity > 0) {
        coffee.quantity -= 1;
        setTotalPrice((prevTotal) => prevTotal - coffee.price);
      }
      return coffee;
    });
    setCoffees(updatedCoffees);
  };

  const handleIncreaseQuantity = (coffeeId: number) => {
    const updatedCoffees = coffees.map((coffee) => {
      if (coffee.id === coffeeId) {
        coffee.quantity += 1;
        setTotalPrice((prevTotal) => prevTotal + coffee.price);
      }
      return coffee;
    });
    setCoffees(updatedCoffees);
  };

  useEffect(() => {
    const initialTotalPrice = coffees.reduce(
      (total, coffee) => total + coffee.price * coffee.quantity,
      0
    );
    setTotalPrice(initialTotalPrice);
  }, []);

  useEffect(() => {
    console.log("Coffees:", coffees);
    console.log("Total Price:", totalPrice);
  }, [coffees, totalPrice]);

  return (
    <>
      <CoffeeListContainer>
        {coffees.map((coffee) => (
          <div className="background" key={coffee.id}>
            <div className="firstCoffee">
              <img className="coffee" src={coffee.image} alt="" />
              {coffee.id === 4 && (
                <div className="twoImgs">
                  <img src={traditional} alt="" />
                  <img className="type" src={chilled} alt="" />
                </div>
              )}
              {coffee.id !== 4 && <img src={traditional} alt="" />}
              <h3>{coffee.title}</h3>
              <p>{coffee.description}</p>
            </div>

            <div className="price">
              <div>
                <p>R$</p>
                <h2>9,90</h2>
              </div>
              <div className="elements">
                <button
                  className="firstButton"
                  onClick={() => handleDecreaseQuantity(coffee.id)}
                >
                  -
                </button>
                <span>{coffee.quantity}</span>
                <button
                  className="secondButton"
                  onClick={() => handleIncreaseQuantity(coffee.id)}
                >
                  +
                </button>
              </div>
              <button className="buttonImg">
                <img src={Button} alt="" />
              </button>
            </div>
          </div>
        ))}
      </CoffeeListContainer>
      <CoffeesListTwo />
    </>
  );
}
