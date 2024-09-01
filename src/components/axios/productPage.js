import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  addToShoppingBox,
  removeFromShoppingBox,
} from "../../reduxToolkit/features/shoppingBox/shoppingBoxSlice";
import axios from "axios";

const ProductPage = () => {
  const [productInformation, setProductInformation] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addedToShoppingBox, setAddedToShoppingBox] = useState(false);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProductInformation(response?.data);
    });
  }, []);

  function addItemToShoppingBox(item) {
    setAddedToShoppingBox(true);
    dispatch(addToShoppingBox(item));
  }

  function removeItemFromShoppingBox(id) {
    setAddedToShoppingBox(false);
    dispatch(removeFromShoppingBox(id));
  }

  function goToShoppingBox() {
    navigate("/shoppingBox");
  }

  return (
    <main className="w-full h-auto">
      <div className="flex flex-row justify-center items-center w-full h-auto">
        <img
          className="w-[400px] h-auto "
          src={productInformation?.image}
          alt={productInformation?.title}
        />
        <div className="flex flex-col justify-center items-center">
          <label>{productInformation?.title}</label>
          <span>{productInformation?.price}</span>
          <span>{productInformation?.category}</span>
          <span>{productInformation?.description}</span>
          <button
            className="bg-blue-700 text-blue-100 m-3 px-6 py-2 rounded-md shadow-lg"
            onClick={() =>
              addedToShoppingBox
                ? removeItemFromShoppingBox(productInformation?.id)
                : addItemToShoppingBox(productInformation)
            }
          >
            {addedToShoppingBox
              ? "remove from shopping box"
              : " add to shopping box"}
          </button>
        </div>
      </div>
      <span
        onClick={goToShoppingBox}
        className="material-icons fixed bottom-4 left-4 text-4xl text-blue-100 bg-blue-800 p-5 rounded-full cursor-pointer shadow-lg "
      >
        shopping_cart
      </span>
    </main>
  );
};

export default ProductPage;
