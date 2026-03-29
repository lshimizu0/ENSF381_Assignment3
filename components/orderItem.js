
import './styles.css';


function OrderItem({id, flavor, price, count, setCount}) {

  return (
    <div>
      <OrderItemStructure 
      id = {id}
      price={price}
      flavor={flavor}
      count={count}
      setCount= {setCount}/>
    </div>
  );
}


function OrderItemStructure(props) {

  const float_price = props.price.replace('$', ''); 

  return (
    <>
      {props.count > 0 ?(<div>
        <h3> {props.flavor} </h3>
        <p> Quantity: {props.count} </p>
        <p> Price: ${(float_price * props.count)}</p>
       <button
            onClick={() => {
            props.setCount((count) => ({
            ...count,
            [props.id]: count[props.id] - 1
          }));
          }}
            className="remove">
            Remove Item
          </button>
      </div>): null
      }
    </>
  );
}

export default OrderItem;