import React, { useMemo } from "react";
import { Roboto } from "@next/font/google";
import {
    Experimental_CssVarsProvider as CssVarsProvider,
    experimental_extendTheme as extendTheme,
} from "@mui/material/styles";

export const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: "#ff5252",
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    main: "#000",
                },
            },
        },
    },
    shape: {
        borderRadius: 10,
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});

export default theme;
