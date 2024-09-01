import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import {getAllProducts, getAllCategories} from './services';

const ProductList = () => {
  const [allProducts, setAllProducts] = useState();
  const [products, setProducts] = useState(allProducts);
  const [allCategories, setAllCategories] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        setAllProducts(response?.data);
        setProducts(response?.data)
      })
      .catch(function (error) {
        console.log(error);
      });

    // const allproducts = getAllProducts();
    // setAllProducts(allproducts);
    // setProducts(allproducts);


    axios
      .get("https://fakestoreapi.com/products/categories")
      .then(function (response) {
        setAllCategories(response?.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    // const allcategories = getAllCategories();
    // setAllCategories(allcategories)

  }, []);

  function showAllProducts() {
    setProducts(allProducts)
  }

  function showSelectedProducts (productType) {
    axios
    .get(`https://fakestoreapi.com/products/category/${productType}`)
    .then(function (response) {
    setProducts(response?.data);
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  function goToProductPage(productId) {
    navigate (`/productPage/${productId}`)
  }

  function goToShoppingBox() {
    navigate('/shoppingBox')
  }

  return (
    <>
      <header className="bg-blue-700 fixed flex flex-row justify-around items-center w-screen h-[60px]">
        <span onClick={showAllProducts} className="bg-blue-100 cursor-pointer text-center text-blue-700 px-[20px] py-1 rounded-full" > All </span>
        {
           allCategories?.map((item, index) => (
               <span onClick={()=>showSelectedProducts(item)} className="bg-blue-100 cursor-pointer text-center text-blue-700 px-[20px] py-1 rounded-full" key={index}>{item}</span>
        ))}
      </header>
      <main className=" bg-blue-100 w-full h-full pt-[60px] flex flex-row flex-wrap justify-center items-center">
        {
            products?.map((item)=>(
                <div className="bg-white rounded-md m-[10px] border-[1px] border-solid border-gray-100 shadow-lg flex flex-col justify-center items-center w-1/5 h-[250px] " key={item.id} >
                    <img className="w-[50px] h-[50px]" src={item.image} alt={item.title} />                  
                    <label>{item.title}</label>
                    <span>{item.price}</span>
                    <span>{item.category}</span>
                    <button onClick={()=>goToProductPage(item?.id)}  className="bg-blue-700 rounded-md text-blue-100 py-1 mt-2 px-[10px]" > view </button>
                </div>
            ))
        }
        <span onClick={goToShoppingBox} className="material-icons fixed bottom-4 left-4 text-4xl text-blue-100 bg-blue-800 p-5 rounded-full cursor-pointer shadow-lg ">shopping_cart</span>

      </main>
    </>
  );
};

export default ProductList;
