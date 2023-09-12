import { useEffect, useState } from "react"
import axios from "axios"


const Mini_API_Lab = () => {
  
const [data, setData] = useState([])
     
useEffect(()=>{
    // go get data
    // set state to the results array
    // rerender!
    axios('https://dummyjson.com/products').then((response) => {
       console.log(response);
        let iphones = response.data.products;
            setData(iphones);
    });
     
},[]);
     

let productsNames = data.map( (product) => {
    return (
        <div key={product.id}>
            <p>name = {product.title}</p>
            <p>price = {product.price}</p>
        </div>
    )
})

  

return (
    <div>
        <h1>Products</h1>
      {productsNames}
    </div>
  )
}

export default Mini_API_Lab
