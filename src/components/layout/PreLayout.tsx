import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import Topbar from "../common/TopBar";

const PreLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Topbar />
      <Box
        component="pre"
        sx={{
          flexGrow: 1,
          p: 1,
          width: `calc(100% - 250px)`,
          minHeight: "100vh",
          backgroundColor: "#fffff"
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default PreLayout;