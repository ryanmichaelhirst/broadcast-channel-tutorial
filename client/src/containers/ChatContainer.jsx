import React from "react";
import MessageList from "../components/MessageList";

const ChatContainer = ({ chats }) => {
    const sortedChats = chats.sort((a, b) => {
        return a.date - b.date;
    });

    return (
        <MessageList messages={sortedChats} />
    );
};

export default ChatContainer;