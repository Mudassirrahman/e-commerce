import { Box, CircularProgress, Container, IconButton, Typography } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Products() {
  let [products, setProducts] = useState([])
  let [loader,setLoader] = useState(false)
  useEffect(() => {
    setLoader(true)
    axios.get("https://fakestoreapi.com/products").then((responce) => {setProducts(responce.data);setLoader(false)})
    
  },[])
  return (
    <Container>
    {loader === true ? <Box sx={{ textAlign: "center", m: 5 }}><CircularProgress /></Box> : 
      <Box  className="d-flex flex-wrap mt-5 gap-4 justify-content-lg-between justify-content-md-between justify-content-sm-between justify-content-center align-content-center">{products.map((product) => {
        return(
          <Box key={product.id} className="card flex-grow-1 col-lg-3 col-md-3 col-sm-5 col-12 p-3">
          <img max-width="200px" height="300px" className='card-img-top' src={product.image} />
           <Box className="card-body">
           <Typography variant='h4' className='card-title'>{product.title.length >= 11 ? product.title.slice(0,11).concat("..."): product.title}</Typography>
           <Typography className='card-text'>{product.description.length >= 90 ? product.description.slice(0,90).concat("..."): product.description}</Typography>
           <Typography>Price: ${product.price}</Typography>
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
      })}</Box>}
    </Container>
  )
}

export default Products