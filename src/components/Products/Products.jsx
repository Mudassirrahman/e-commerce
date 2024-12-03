import { Box, Container, IconButton } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
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
      <Box  className="d-flex flex-wrap mt-5 gap-4 justify-content-lg-between justify-content-md-between justify-content-sm-between justify-content-center align-content-center">{products.map((product) => {
        return(
          <Box key={product.id} className="card flex-grow-1 col-lg-3 col-md-3 col-sm-5 col-12 p-3">
          <img max-width="200px" height="300px" className='card-img-top' src={product.image} />
           <Box className="card-body">
           <h1 className='card-title'>{product.title.length >= 15 ? product.title.slice(0,15).concat("..."): product.title}</h1>
           <p className='card-text'>{product.description.length >= 90 ? product.description.slice(0,90).concat("..."): product.description}</p>
           <p>Price: ${product.price}</p>
           </Box>
            <Box className="d-flex justify-content-center gap-5">
            <IconButton size="large" color="info">
             <VisibilityIcon />
            </IconButton>
            <IconButton size="large" color="success">
             <AddShoppingCartIcon />
            </IconButton>
            </Box>
          </Box>
        )
      })}</Box>
    </Container>
  )
}

export default Products