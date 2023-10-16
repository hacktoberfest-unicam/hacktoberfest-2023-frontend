import { Box } from "@mui/material";
import React from "react";


import Icon from "../images/icons/08@2x.png";

import LoginComponent from "../components/LoginComponent";

export default function LoginPage() {
  return (
    <Box display="flex" gap={2} justifyContent="center" alignItems="center">
      <Box component="img" width="auto" height={300} src={Icon} />
      <LoginComponent />
    </Box>
  );
}
