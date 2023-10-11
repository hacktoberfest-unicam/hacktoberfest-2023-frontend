import { createTheme } from "@mui/material";

export const theme = createTheme({

    palette: {
        primary: {
            light: "#fffba4", // lighter yellow
            main: "#d2b863", // dirty yellow
            dark: "#ad832d", // light brown
            contrastText: "#3d2e10", // brown
        },

        secondary: {
            light: "#efedef", // white
            main: "#c3bcc3", // gray
            dark: "#655f67",  // grey dark
        },

        info: {
            light: "#b2e3f0", // light blue
            main: "#33b6d8",  // cyan
            dark: "#14596b", //blue
            contrastText: "#0c3640" // dark blue
        }
    },

    typography: {
        fontFamily: "Jetbrains Mono",
        // Extrabold
        h1: {
            fontWeight: 800,
        },
        // Bold
        h2: {
            fontWeight: 700
        },
        h3: {
            fontWeight: 700
        },
        h4: {
            fontWeight: 700
        },
        // Medium
        h5: {
            fontWeight: 500
        },
        h6: {
            fontWeight: 500
        },
        h7: {
            fontWeight: 500
        },
        // Regular
        body1: {
            fontWeight: 400
        }
    }
})