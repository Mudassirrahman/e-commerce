import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <Container>
      <h1>Signup</h1>
      <Link to="/signin">already hav account</Link>
    </Container>
  );
}

export default Signup;
