import React from "react";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

interface ChatListItemProps {
    item: {
        id: number;
        address: string;
        email: string;
        phone: string;
        username: string;
        name: string;
        status: string;
        lastActivity: string;
    };
}

const ChatListItem: React.FC<ChatListItemProps> = ({
    item: { username, name, lastActivity },
}) => {
    return (
        <SChatListItem>
            <SChatListItemButton role="button" tabIndex={0}>
                <SStatus>
                    <Avatar
                        alt={username}
                        src={`https://api.dicebear.com/5.x/bottts-neutral/svg?seed=${username}`}
                        sx={{ width: 54, height: 54 }}
                    />
                </SStatus>
                <SInfo>
                    <SInfoRow>
                        <STitle dir="auto">{name}</STitle>
                        <SInfoRowSeparator />
                        <SLastMessageMeta>
                            <span>{lastActivity}</span>
                        </SLastMessageMeta>
                    </SInfoRow>
                    <SSubtitle>
                        <p dir="ltr">
                            <span className="preview">Text</span>
                        </p>
                    </SSubtitle>
                </SInfo>
            </SChatListItemButton>
        </SChatListItem>
    );
};

const SChatListItem = styled("div")``;

const SChatListItemButton = styled("div")(({ theme }) => ({
    cursor: "pointer",
    width: "100%",
    display: "flex",
    position: "relative",
    overflow: "hidden",
    whiteSpace: "nowrap",
    borderRadius: theme.shape.borderRadius,
    gap: theme.spacing(1),
    padding: theme.spacing(1, 1),
    transition: theme.transitions.create(["background-color"]),
    "&:hover, &.active": {
        backgroundColor: theme.palette.grey[200],
    },
}));

const SStatus = styled("div")``;
const SInfo = styled("div")``;
const SInfoRow = styled("div")`
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const SSubtitle = styled("div")`
    p {
        margin: 0;
    }
`;
const STitle = styled("h3")`
    margin: 0;
`;
const SInfoRowSeparator = styled("div")`
    flex-grow: 1;
    min-width: 0.5rem;
`;
const SLastMessageMeta = styled("div")``;

export default ChatListItem;
