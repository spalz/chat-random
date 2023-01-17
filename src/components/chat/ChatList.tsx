import React from "react";
import { styled } from "@mui/material/styles";

import { ChatListItem } from "@components/chat";

import { users } from "@data/users";

export const ChatList = () => {
    return (
        <SChatList>
            <SChatListWrapper>
                {users.map((item) => (
                    <ChatListItem key={item.id} item={item} />
                ))}
            </SChatListWrapper>
        </SChatList>
    );
};

const SChatList = styled("div")`
    height: 100%;
    overflow-y: auto;
`;

const SChatListWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
}));

export default ChatList;
