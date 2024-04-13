import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { modalAction } from "../store";
import Modal from "./Modal";

function Header() {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((store) => store.wishlist);
  const wishlistCount = wishlistItems.length;

  const modalStatus = useSelector((store) => store.modal);

  const handleshowModal = () => {
    dispatch(modalAction.openModal());
  };

  const bagItems = useSelector((store) => store.bag);
  return (
    <>
      <header className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <nav className="nav_bar">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">
              Studio <sup>New</sup>
            </a>
          </nav>
          <div className="search_bar">
            <span className="material-symbols-outlined search_icon pointer">
              <FaSearch />
            </span>
            <input
              className="search_input"
              placeholder="Search for products, brands and more"
            />
          </div>
        </div>
        <div className="action_bar">
          <div className="action_container pointer" onClick={handleshowModal}>
            <CgProfile />
            <span className="action_name ">Profile</span>
          </div>

          <Link className="action_container pointer" to={"/wishlist"}>
            <CiHeart />
            <span className="action_name ">Wishlist</span>
            <span className="wishlist-item-count">{wishlistCount}</span>
          </Link>

          <Link className="action_container pointer" to="/bag">
            <PiHandbagSimpleFill />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bagItems.length}</span>
          </Link>
        </div>
      </header>
      {modalStatus && <Modal />}
    </>
  );
}

export default Header;
