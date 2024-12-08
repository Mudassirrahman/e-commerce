import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';

export default function Cart({ open, toggleDrawer }) {
  let cartitem = useSelector((item) => item.cartItems.items);
  let totalprice = 0

  return (
    <Container>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250  }}
          role="presentation"
        >
        <CloseIcon className="float-end" onClick={toggleDrawer(false)} />
          <h1 className="px-2">your cart items</h1>
          {cartitem.map((item) => {
            return (
              <div key={item.id}>
                <div className="px-2">
                  <img width={"50px"} src={item.image} />
                  <h5>{item.title}</h5>
                  <p>price: ${item.price}</p>
                </div>
                <div className="position-absolute bottom-0 bg-white">
                  <p className="px-2">Total Price: {totalprice += item.price}</p>
                </div>
              </div>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
}
