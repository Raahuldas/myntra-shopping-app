import React from "react";
import WishlistItems from "../Components/WishlistItems";
import { useSelector } from "react-redux";

function Wishlist() {
  const wishlistId = useSelector((store) => store.wishlist);
  const items = useSelector(store=>store.items);
  const wishlistItem = items.filter(item => wishlistId.indexOf(item.id) >= 0); 

  return (
    <>
      <div className=" fs-4 fw-medium mt-4 ms-5  ">My WishList : <span className="fw-normal">{wishlistId.length} items</span> </div>
      <div className="items-container">
        {wishlistItem.map((item) => (
          <WishlistItems key={item.id} item={item} />
        ))}
        {wishlistId.length == 0 && <div className="empty-wishlist"> Wishlist is Empty</div>}
      </div>
    </>
  );
}

export default Wishlist;
