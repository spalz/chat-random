import React from "react";
import { styled } from "@mui/material/styles";

import {
    ChatList,
    ChatMessageInput,
    ChatMessagesContainer,
    ChatMiddleHeader,
} from "@components/chat";

export const Chat = () => {
    return (
        <SChat>
            <SLeftColumn>
                <ChatList />
            </SLeftColumn>
            <SMiddleColumn>
                <ChatMiddleHeader />
                <ChatMessagesContainer />
                <ChatMessageInput />
            </SMiddleColumn>
        </SChat>
    );
};

const SChat = styled("div")(({ theme }) => ({
    display: "flex",
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: theme.palette.background.default,
}));

const SLeftColumn = styled("div")``;

const SMiddleColumn = styled("div")`
    display: flex;
    flex-direction: column;
`;

export default Chat;
