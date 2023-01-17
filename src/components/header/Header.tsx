import React, { memo } from "react";
import { styled } from "@mui/material/styles";
import dynamic from "next/dynamic";

const HeaderThemeMode = dynamic(
    () => import("@components/header/HeaderThemeMode"),
    {
        ssr: false,
    }
);

interface HeaderProps {
    // onClickOpenMenu: () => void;
}

let Header: React.FC<HeaderProps> = ({}) => {
    return (
        <SHeader>
            <HeaderThemeMode />
        </SHeader>
    );
};

Header = memo(Header);

const SHeader = styled("header")``;

export default Header;
