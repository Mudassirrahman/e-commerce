import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Button, ButtonGroup, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { decreaseQuntity, increaseQuntity } from "../../slices/productSlice";

export default function Cart({ open, toggleDrawer }) {
  let cartitem = useSelector((item) => item.PRODUCTS.products.cartProducts);
  let totalprice = 0;

  let dispatch = useDispatch();

  return (
    <Container>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <IconButton
            onClick={toggleDrawer(false)}
            className="float-end"
            size="large"
            color="warning"
          >
            <CloseIcon color="error" />
          </IconButton>
          <h1 className="px-2 fs-3 mt-1">Cart Items</h1>
          {cartitem.map((item) => {
            return (
              <div key={item.id} className="mt-4">
                <div className="px-2">
                  <img width={"50px"} src={item.image} />
                  <h5>{item.title}</h5>
                  <div className="d-flex">
                    <p>price: ${Math.floor(item.price * item.quntity)}</p>
                    <div>
                      <ButtonGroup
                        variant="text"
                        aria-label="Basic button group"
                      >
                        <Button onClick={() => dispatch(decreaseQuntity(item))}>
                          <RemoveIcon />
                        </Button>
                        <Button>{item.quntity}</Button>
                        <Button onClick={() => dispatch(increaseQuntity(item))}>
                          <AddIcon />
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                </div>
                <div className="position-absolute bottom-0 bg-white">
                  <p className="px-2">
                    Total Price: ${totalprice += Math.floor((item.price * item.quntity))}
                  </p>
                </div>
              </div>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
}
