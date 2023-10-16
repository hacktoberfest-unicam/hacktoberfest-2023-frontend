import {
  AppBar,
  Box,
  Button,
  Stack,
  Toolbar,
  Typography,
  Zoom,
} from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";

import LogoHorizontal from "../images/logoHorizontal/hf10_horz_fcl_rgb.png";
import Icon from "../images/logomark_icon/hf10_icon_fcd_cmyk.png";

import BackgroundLaptop from "../images/background/bigScreen.jpg";
import { useState } from "react";
import { theme } from "../theme/customTheme";

export default function Layout() {
  const [showDynamicIsland, setShowDynamicIsland] = useState(false);

  const showIsland = () => {
    if (window.scrollY >= 100) {
      setShowDynamicIsland(true);
    } else {
      setShowDynamicIsland(false);
    }
  };

  window.addEventListener("scroll", showIsland);

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

  let animation = {};

  for (let i = 0; i <= 100; i += 1) {
    animation[`${i}%`] = {
      background: `linear-gradient(${i * 3.6}deg, rgba(210,184,99,1) 17%, rgba(255,251,164,1) 44%, rgba(195,188,195,1) 67%);`,
    };
  }

  return (
    <div>
      {/* <Box component="img" src={BackgroundLaptop} position="fixed" /> */}
      <AppBar position="absolute" color="transparent" sx={{ boxShadow: 0 }}>
        <Toolbar
          disableGutters
          sx={{
            display: { md: "flex", xs: "none" },
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
              sx={{ display: { md: "inline", xs: "none" } }}
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
      <Box width="100%" position="absolute" minHeight="100vh" sx={{ backgroundImage: `url(${BackgroundLaptop})` }}>
        <Box
          maxWidth={1300}
          marginX="auto"
          marginY={0}
          paddingX={20}
          paddingY={20}
        >
          <Box
            position="fixed"
            zIndex={999}
            width="50%"
            left="50%"
            top={50}
            sx={{ transform: "translate(-50%)" }}
          >
            <Zoom in={showDynamicIsland}>
              <Box
                sx={{
                  background: `linear-gradient(0deg, rgba(210,184,99,1) 17%, rgba(255,251,164,1) 44%, rgba(195,188,195,1) 67%);`,
                  animationName: "borderGradient",
                  animationDuration: "0.5s",
                  animationIterationCount: "infinite",
                  "@keyframes borderGradient": animation,
                }}
                borderRadius={10}
                padding={0.5}
              >
                <Box
                  bgcolor="#000000"
                  borderRadius={10}
                  display="flex"
                  justifyContent="space-around"
                  paddingX={2}
                  paddingY={1}
                >
                  <Box component="a" href="/" height={61} padding={0.2}>
                    <img src={Icon} alt="hacktoberfest" />
                  </Box>
                  <Box display="flex" gap={4}>
                    <Box display="flex" gap={1}>
                      {pages.map((page) => (
                        <Button
                          key={page.label}
                          href={page.link}
                          sx={{ borderRadius: 10, padding: 2 }}
                        >
                          <Typography variant="h5" color="primary.light">
                            {page.label}
                          </Typography>
                        </Button>
                      ))}
                    </Box>
                    <Button
                      sx={{ marginLeft: "auto", borderRadius: 10, padding: 2 }}
                      href="profile"
                    >
                      <Typography variant="h5" color="secondary.main">
                        Profile
                      </Typography>
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Zoom>
          </Box>
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
            minHeight: 72,
          }}
        >
          <Box
            maxWidth={1300}
            marginX="auto"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography variant="body1" color="primary.dark" textAlign="center">
              Hacktoberfest is a registered trademark of DigitalOcean, LLC. This
              website is not affiliated to DigitalOcean, LLC.
            </Typography>
            <Stack>
              <Typography variant="body1" color="primary.dark">
                Backend: <a href="https://github.com/HarlockOfficial" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: theme.palette.primary.dark }}>Francesco Moschella</a>, <a href="https://github.com/ArghgrA" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: theme.palette.primary.dark }}>Vincenzo Petrillo</a>
              </Typography>
              <Typography variant="body1" color="primary.dark">
                Frontend: <a href="https://github.com/lollobeach" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: theme.palette.primary.dark }}>Lorenzo Verducci</a>, <a href="https://github.com/giorgiosld" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: theme.palette.primary.dark }}>Giorgio Saldana</a>, <a href="https://github.com/Frascott05" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: theme.palette.primary.dark }}>Francesco Scotti</a>
              </Typography>
            </Stack>
          </Box>
        </footer>
      </Box>
    </div>
  );
}
