import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromShoppingBox } from "../../reduxToolkit/features/shoppingBox/shoppingBoxSlice";

const ShoppingBox = () => {
  const MIN_NUMBER = 1;
  const changeValue = 1;
  const dispatch = useDispatch();
  const shoppingBoxItems = useSelector((state) =>
    state?.shoppingBoxItems?.map((item) => ({ ...item, number: MIN_NUMBER }))
  );

  const [shoppingBuxData,setShoppingBoxData] = useState(shoppingBoxItems)

  function changeNumber(item, index, value) {
    if (item.number) {
      if (item.number === 1 && value < 0) {
        alert("error");
      } else {
        item.number = item.number + value;
      }
    } else {
      item.number = MIN_NUMBER;
    }
    shoppingBuxData[index] = item;
    setShoppingBoxData([...shoppingBuxData])
  }

  return (
    <main className="flex flex-row justify-center items-center">
      {shoppingBuxData?.map((item, index) => {
        return (
          <div
            className="bg-white relative rounded-md m-[10px] border-[1px] border-solid border-gray-100 shadow-lg flex flex-col justify-center items-center w-1/5 h-[300px] "
            key={item.id}
          >
            <img
              className="w-[50px] h-[50px]"
              src={item.image}
              alt={item.title}
            />
            <label>{item.title}</label>
            <span>{item.price}</span>
            <span>{item.category}</span>
            <div className="m-2">
              <span
                onClick={() => changeNumber(item, index, -changeValue)}
                className="material-icons p-1 cursor-pointer"
              >
                remove
              </span>
              <span>{item.number}</span>
              <span
                onClick={() => changeNumber(item, index, +changeValue)}
                className="material-icons p-1 cursor-pointer"
              >
                add
              </span>
            </div>
            <p className="bg-red-500">{`${+item.number * +item.price}`}</p>

            <button
              onClick={() => dispatch(removeFromShoppingBox(item.id))}
              className="bg-blue-700 rounded-md text-blue-100 py-1 mt-2 px-[10px] "
            >
              remove from shopping box
            </button>
          </div>
        );
      })}
    </main>
  );
};

export default ShoppingBox;
