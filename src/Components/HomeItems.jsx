import React from "react";
import { bagAction, wishlistAction } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";

function HomeItems({ item }) {
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;

  const wishlistitems = useSelector((store) => store.wishlist);
  const liked = wishlistitems.indexOf(item.id) >= 0;

  const dispatch = useDispatch();
  const handleAddToBag = () => {
    dispatch(bagAction.addToBag(item.id));
  };
  const handleRemove = () => {
    dispatch(bagAction.removeFromBag(item.id));
  };
  const handleAddtoWishlist = () => {
    dispatch(wishlistAction.addToWishlist(item.id));
  };
  const handleRemoveFromWishlist = () => {
    dispatch(wishlistAction.removeFromWishlist(item.id));
  };

  return (
    <div className="item-container card-position-relative">
      {liked ? (
        <div className="add-to-wishlist" onClick={handleRemoveFromWishlist}>
          <FaHeart />
        </div>
      ) : (
        <div className="add-to-wishlist" onClick={handleAddtoWishlist}>
          <FaRegHeart />
        </div>
      )}
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
      {!elementFound ? (
        <button className="btn-add-bag" onClick={handleAddToBag}>
          Add to Bag <PiHandbagSimpleFill />
        </button>
      ) : (
        <button className="btn-add-bag btn btn-danger" onClick={handleRemove}>
          Remove <PiHandbagSimpleFill />
        </button>
      )}
    </div>
  );
}

export default HomeItems;
