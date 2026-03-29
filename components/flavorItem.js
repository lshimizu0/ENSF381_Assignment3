import { useState } from "react";
import "./styles.css";

function FlavorItem({ id, flavor, imgsrc, price, duration, desc, count, setCount }) {
  return (
    <div>
      <FlavorStructure
        id={id}
        flavor={flavor}
        imgsrc={imgsrc}
        price={price}
        duration={duration}
        desc={desc}
        count={count}
        setCount={setCount}
      />
    </div>
  );
}

function FlavorStructure(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flavor-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={props.imgsrc} alt={props.flavor} />
      <h3>{props.flavor}</h3>
      <p>{props.price}</p>
      <p>{props.duration}</p>
      {isHovered ? <p>{props.desc}</p> : null}

      <button onClick={() => {
        props.setCount((prev) => ({
    ...prev,
    [props.id]: (prev[props.id]) + 1
  }));

        }}>
        add to order
      </button>
    </div>
  );
}

export default FlavorItem;