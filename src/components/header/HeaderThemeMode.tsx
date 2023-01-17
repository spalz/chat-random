import React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { useColorScheme } from "@mui/material/styles";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const HeaderThemeMode = () => {
    const { mode, setMode } = useColorScheme();

    const toggleColorMode = () => {
        setMode(mode === "light" ? "dark" : "light");
    };

    return (
        <SHeaderThemeMode onClick={() => toggleColorMode()}>
            {mode === "light" ? "Turn dark" : "Turn light"}
            <IconButton sx={{ ml: 1 }} color="inherit">
                {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </SHeaderThemeMode>
    );
};

const SHeaderThemeMode = styled("div")(({ theme }) => ({
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    bgcolor: "background.default",
    color: theme.palette.text.primary,
    textTransform: "capitalize",
}));

export default HeaderThemeMode;
