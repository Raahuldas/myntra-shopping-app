import React from "react";
import { useDispatch } from "react-redux";
import {bagAction} from "../store/index"
import { RxCross2 } from "react-icons/rx";

function BagItems({ item }) {
  const dispatch = useDispatch();

  const handleRemove =()=>{
    dispatch(bagAction.removeFromBag(item.id))
  }
  return (
    <div className="bag-item-container row ">
      <div className="item-left-part col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-2 px-0">
        <img className="bag-item-img" src={item.image} />
        <div
        className="remove-from-cart"
        onClick={handleRemove}
      >
        <RxCross2/>
      </div>
      </div>
      <div className="item-right-part col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9 col-xxl- 10">
        <div className="company">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price-container">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount-percentage">
            ({item.discount_percentage}% OFF)
          </span>
        </div>
        <div className="return-period">
          <span className="return-period-days">{item.return_period} days</span>
          return available
        </div>
        <div className="delivery-details">
          Delivery by
          <span className="delivery-details-days">{item.delivery_date}</span>
        </div>
      </div>
    </div>
  );
}

export default BagItems;
