import Header from "../components/header.js";
import FlavorCatalog from "../components/flavorCatalog.js";
import OrderList from "../components/orderList.js";
import Footer from "../components/footer.js";
import { useState } from 'react';
import flavors from "../data/flavors.js";

function Flavors() {

    const [count, setCount] = useState(() => {
    const initial = {};
    flavors.forEach(flavor => {
        initial[flavor.id] = 0;
    });
    return initial;
    });


    return (
        <div className="flavors-page"> 
        <Header /> 
        <div className="content"> 
        <FlavorCatalog 
        setCount={setCount}
        count = {count}/> 
        <OrderList 
        count={count}
        setCount = {setCount}/> 
        </div> 
        <Footer /> 
        </div>
    );
}

export default Flavors;