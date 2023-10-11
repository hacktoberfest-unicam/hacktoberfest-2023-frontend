import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";

import LogoHorizontal from "../images/logoHorizontal/hf10_horz_fcl_rgb.png";

import BackgroundLaptop from "../images/background/bigScreen.jpg";

export default function Layout() {
  const pages = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Ranking",
      link: "ranking",
    },
  ];

  return (
    <div>
      <Box component="img" src={BackgroundLaptop} position="fixed" />
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
                <Button key={page.label} href={page.link}>
                  <Typography variant="h5" color="primary.light">
                    {page.label}
                  </Typography>
                </Button>
              ))}
            </Box>
            <Button
              variant="outlined"
              sx={{ marginLeft: "auto" }}
              href="profile"
            >
              <Typography variant="h5" color="secondary.main">
                Profile
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box width="100%" position="absolute" minHeight="100vh">
        <Box
          maxWidth={1300}
          marginX="auto"
          marginY={0}
          paddingX={20}
          paddingY={20}
        >
          <Outlet />
        </Box>
        <footer
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            backgroundColor: "rgba(101, 95, 103, 0.5)",
            paddingTop: 24,
            paddingBottom: 24,
            height: 72
          }}
        >
          <Box maxWidth={1300} marginX="auto" display="flex" flexDirection="column" alignItems="center">
            <Typography variant="body1" color="primary.dark">
              Hacktoberfest is a registered trademark of DigitalOcean, LLC. This
              website is not affiliated to DigitalOcean, LLC.
            </Typography>
            <Stack>
              <Typography variant="body1" color="primary.dark">
                Backend: Francesco Moschella, Vincenzo Cognome
              </Typography>
              <Typography variant="body1" color="primary.dark">
                Frontend: Lorenzo Verducci, Giorgio Saldana, Francesco Cognome
              </Typography>
            </Stack>
          </Box>
        </footer>
      </Box>
    </div>
  );
}

