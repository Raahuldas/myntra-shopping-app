import React from "react";
import BagItems from "../Components/BagItems";
import BagSummary from "../Components/BagSummary";
import { useSelector } from "react-redux";

function Bag() {
  const bagItems = useSelector(store=>store.bag);
  const items = useSelector(store=>store.items);
  const item = items.filter((item)=>{
    const finalItems = bagItems.indexOf(item.id);
    return finalItems >= 0;
  })
  return (
    <main>
      <div className="bag-page row mx-auto">
        <div className="bag-items-container col-12 col-sm-12 col-md-7 col-lg-8">
          {item.map((item)=><BagItems key={item.id} item={item} />)}
          {item.length == 0 && <div className="empty-bag">Bag is Empty</div>}
        </div>
        <div className="bag-summary col-12 col-sm-12 col-md-5 col-lg-4">
          <BagSummary />
        </div>
      </div>
    </main>
  );
}

export default Bag;
