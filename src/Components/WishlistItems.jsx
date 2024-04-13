import React from "react";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { bagAction, wishlistAction } from "../store";

function WishlistItems({ item }) {
  const dispatch = useDispatch();

  const handleAddToBag =()=>{
    dispatch(bagAction.addToBag(item.id));
    dispatch(wishlistAction.removeFromWishlist(item.id));
}

  const handleRemoveFromWishlist = () => {
    dispatch(wishlistAction.removeFromWishlist(item.id));
  };
  return (
    <div className="item-container card-position-relative">
      <div className="remove-from-wishlist" onClick={handleRemoveFromWishlist}>
        <RxCross2 />
      </div>
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      <button className="btn-add-bag" onClick={handleAddToBag}>
        Move to Bag <PiHandbagSimpleFill />
      </button>
    </div>
  );
}

export default WishlistItems;
