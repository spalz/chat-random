import React from "react";
import type { AppProps } from "next/app";
import {
    Experimental_CssVarsProvider as CssVarsProvider,
    experimental_extendTheme as extendTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";

import { Header } from "@components/header";
const { wrapper } = require("@redux/store");
import { Provider } from "react-redux";
import { createEmotionCache, theme } from "@utils";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, ...rest }: AppProps) {
    const { store, props } = wrapper.useWrappedStore(rest);
    const { emotionCache = clientSideEmotionCache } = props;

    return (
        <CacheProvider value={emotionCache}>
            <Provider store={store}>
                <CssVarsProvider theme={theme}>
                    <CssBaseline />
                    <Header />
                    <Component {...props.pageProps} />
                </CssVarsProvider>
            </Provider>
        </CacheProvider>
    );
}

export default MyApp;
