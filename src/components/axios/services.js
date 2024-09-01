import axios from "axios";

export const getAllProducts = () => {
  return  axios
  .get("https://fakestoreapi.com/products")
  .then(function (response) {
    return response?.data
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const getAllCategories = () => {
  return  axios
  .get("https://fakestoreapi.com/products/categories")
  .then(function (response) {
    return response?.data
  })
  .catch(function (error) {
    console.log(error);
  });
}