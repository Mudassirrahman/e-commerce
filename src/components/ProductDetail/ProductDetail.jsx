import { Box, CircularProgress, Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  let [products, setProducts] = useState([]);
  let [loader, setLoader] = useState(false);
  let param = useParams();

  useEffect(() => {
    setLoader(true);
    axios
      .get(`https://fakestoreapi.com/products/${param.product_id}`)
      .then((responce) => {
        setProducts(responce.data);
        setLoader(false);
      });
  }, []);

  return (
    <Container>
      {loader === true ? (
        <Box sx={{ textAlign: "center", m: 5 }}>
          <CircularProgress />
        </Box>
      ) : (
        <div className="border mt-5 d-flex flex-wrap">
          <div className="p-2 col-lg-4 col-md-4 col-sm-6 col-12">
            <img max-width="200px" height="300px" src={products.image} />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <h1>{products.title}</h1>
            <h4>{products.category}</h4>
            <p>{products.description}</p>
            <p>{products.price}</p>
          </div>
        </div>
      )}
    </Container>
  );
}

export default ProductDetail;
