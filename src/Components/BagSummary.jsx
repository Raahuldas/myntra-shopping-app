import React from "react";
import { useSelector } from "react-redux";

function BagSummary() {
  const bagItemId = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItemId.indexOf(item.id);
    return itemIndex >= 0;
  });
  
    let totalItem= bagItemId.length;
    let totalMRP= 0;
    let totalDiscount= 0;
    let finalPayment= 0;
    let ConvenienceFees;
    
    totalItem <= 0? ConvenienceFees = 0: ConvenienceFees = 50;

    finalItems.forEach(item => {
      totalMRP += item.original_price;
      totalDiscount += item.original_price - item.current_price;
    });
    finalPayment = totalMRP - totalDiscount + ConvenienceFees;
  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({totalItem} Items)
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹{ConvenienceFees}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
}

export default BagSummary;
