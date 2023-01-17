import type { NextPage } from "next";
import React from "react";
import { styled } from "@mui/material/styles";

import { Chat } from "@components/chat";

const HomePage: NextPage = () => {
    return (
        <SHomePage>
            <Chat />
        </SHomePage>
    );
};

const SHomePage = styled("div")(({ theme }) => ({
    padding: theme.spacing(4),
}));

export default HomePage;
