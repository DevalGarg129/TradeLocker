import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

import Menu from "./Menu";

const TopBar = () => {
  return (
    <AppBar position="sticky" color="transparent" elevation={1} className="bg-white shadow-sm">
      <Toolbar className="flex flex-wrap gap-4 justify-between px-4 py-3">
        <Box className="flex flex-col sm:flex-row sm:items-center gap-3">
          <Typography variant="subtitle2" className="uppercase tracking-[0.35em] text-slate-500">
            Live market pulse
          </Typography>
          <Box className="flex items-center gap-3">
            <Chip label="NIFTY 50  |  100.2" color="primary" size="small" />
            <Chip label="SENSEX  |  100.2" size="small" className="bg-gray-100 text-slate-700" />
          </Box>
        </Box>

        <Menu />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
