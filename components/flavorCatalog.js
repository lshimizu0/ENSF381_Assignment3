import flavors from "../data/flavors.js";

import FlavorItem from "./flavorItem";

import './styles.css';

function FlavorCatalog({ count, setCount }) {
  return (
    <div className="flavor-grid">
      {flavors.map(function(item) {
        return <FlavorItem
          id={item.id}
          flavor={item.name}
          imgsrc={item.image}
          price={item.price}
          duration={item.duration}
          desc={item.description}
          count={count[item.id]}
          setCount={setCount}
        />
      })}
    </div>
  );
}


export default FlavorCatalog;