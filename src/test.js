import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './style.css'

const TestComponent = () => {
    const [data,setData]=useState();
    

    const getData=()=>{
            axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken").then((res)=>{
            setData(res?.data?.meals)
            console.log("res",res)
        }).catch((err)=>{
            console.log(err)
        })

       
    }

    useEffect(() => {
        getData()
    }, [])

    return(
<div className='main-div'>
    {data?.map((item)=>{
        return(
        <div className='content'>
           <h1>{item?.strMeal}</h1>
           <img src={item?.strMealThumb} className='image-div'/> 
           <span>{item?.strInstructions}</span>
        </div>
        )
    })}
    

</div>
    ) 
}



export default TestComponent;