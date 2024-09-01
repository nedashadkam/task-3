import axios from "axios";
import React from "react";
import {  useQuery } from "react-query";

const fetchData = async ()=> {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
};

const GetData = () => {

    const {isLoading, isError, error, data} = useQuery('get' , fetchData);
    
    if(isLoading) {
        return <div>درحال دریافت اطلاعات</div>
    }
    if(isError) {
        return <div>{error.message}</div>
    }

    return (
        <>
        <h1>{data.map((item)=>(
            <li key={item.id}>{item.title}</li>
        ))}</h1>
        </>
    )
}

export default GetData;