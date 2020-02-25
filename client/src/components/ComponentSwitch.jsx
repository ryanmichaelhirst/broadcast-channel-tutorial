import React from "react";
import ExampleContainer from "../containers/ExampleContainer";
import ChatContainer from "../containers/ChatContainer";
import RepositoryContainer from "../containers/RepositoryContainer";

const ComponentSwitch = ({ mode, sent, received, repo }) => {
    switch (mode) {
        case "example":
            return <ExampleContainer />;
        case "chat":
            return <ChatContainer chats={sent.concat(received)} />;
        case "repository":
            return <RepositoryContainer repo={repo} />;
        default:
            return null;
    }
};

export default ComponentSwitch;