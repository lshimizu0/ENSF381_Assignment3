import OrderItem from "./orderItem";
import flavors from "../data/flavors";
import "./styles.css";
import { useEffect } from 'react';


function OrderList({ count, setCount }) {

  useEffect(() => {
    localStorage.setItem("users order", JSON.stringify(count));
  }, [count]);

  let totalPrice = 0;

  flavors.forEach(function(item){
  const price = item.price.replace("$", "");
  const itemCount = count[item.id];

  totalPrice += price * itemCount;
  });


  return (
    <div className="order-list">
      {flavors.map(function(item) {
        return <OrderItem
          id={item.id}
          flavor={item.name}
          price={item.price}
          count={count[item.id]}
          setCount={setCount}
        />
        })}
        <h3>Total Price: ${totalPrice}</h3>
    </div>
    
  );
}

export default OrderList;