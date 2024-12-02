import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <Container>
      <h1>Signin</h1>
      <Link to="/signup">Click Here To SignUP</Link>
    </Container>
  );
}

export default Signin;
