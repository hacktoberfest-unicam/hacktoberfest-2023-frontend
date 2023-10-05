import { createTheme } from "@mui/material";

export const theme = createTheme({

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