import { Box, Container } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Products() {
  let [products, setProducts] = useState([])
  let productsData
  useEffect(() => {
    productsData = axios.get("https://fakestoreapi.com/products").then((responce) => setProducts(responce.data))
  },[])
  return (
    <Container>
      <Box  className="d-flex flex-wrap mt-5 gap-4 justify-content-between">{products.map((product) => {
        return(
          <Box key={product.id} className="card col-3 p-3">
          <img width="250px" height="270px" className='' src={product.image} />
            <h1>{product.title.slice(0,15)}</h1>
            <p>{product.description.slice(0,90)}</p>
          </Box>
        )
      })}</Box>
    </Container>
  )
}

export default Products