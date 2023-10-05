import "./App.css";

import Router from "./routes";
import { BrowserRouter } from "react-router-dom";

import { theme } from "./theme/customTheme";
import { ThemeProvider } from "@emotion/react";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
