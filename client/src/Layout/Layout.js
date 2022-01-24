import { useTheme } from '@mui/material/styles';
import { Box, Container, Divider } from "@mui/material";
import { Outlet } from "react-router";
import NavBar from "./NavBar";

export default function Layout(props) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.light
      }}
      className="Layout"
    >
      <NavBar toggleNightMode={props.toggleNightMode} isDark={props.isDark} />
      <Box
        sx={{
          m: 3,
          minHeight: "75vh",
          mx: {
            xs: 2,
            md: 4,
            lg: 10,
            xl: 15
          }
        }}
      >
        <Outlet />
      </Box>
      <Divider />
      <Box
        className="Footer"
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
          minHeight: "5vh"
        }}
      >
        © 2021-2022 Bottom text
      </Box>
    </Box>
  );
}
