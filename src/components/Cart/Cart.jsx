import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Container } from "@mui/material";

export default function Cart({ open, toggleDrawer }) {
  return (
    <Container>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 300, }}
          role="presentation"
          onClick={toggleDrawer(false)}
        ></Box>
      </Drawer>
    </Container>
  );
}
