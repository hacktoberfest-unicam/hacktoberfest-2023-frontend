import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";

import LogoHorizontal from "../images/logoHorizontal/hf10_horz_fcl_rgb.png";

import BackgroundLaptop from "../images/background/laptop.jpg";

export default function Layout() {
  const pages = ["Home", "Challenges", "Ranking"];

  return (
    <div
      style={{ backgroundImage: `url(${BackgroundLaptop})`, height: "100vh" }}
    >
      <AppBar position="absolute" color="transparent" sx={{ boxShadow: 0 }}>
        <Toolbar
          disableGutters
          sx={{
            display: { lg: "flex", xs: "none" },
            maxWidth: 1300,
            marginX: "auto",
            marginY: 0,
            gap: 30,
          }}
        >
          <Link to="/">
            <Box
              component="img"
              src={LogoHorizontal}
              sx={{ display: { lg: "inline", xs: "none" } }}
            />
          </Link>
          <Box display="flex" flexGrow={1} gap={10}>
            <Box display="flex" gap={4}>
              {pages.map((page) => (
                <Button key={page}>
                  <Typography variant="h5" color="primary.light">
                    {page}
                  </Typography>
                </Button>
              ))}
            </Box>
            <Button variant="outlined" sx={{ marginLeft: "auto" }}>
              <Typography variant="h5" color="secondary.main">
                Profile
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box width="100%" position="absolute" paddingTop={20}>
        <Box maxWidth={1300} position="relative" marginX="auto" marginY={0} paddingX={20} >
          <Outlet />
        </Box>
      </Box>
    </div>
  );
}

