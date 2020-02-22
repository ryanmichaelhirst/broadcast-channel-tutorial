import React from "react";
import ChatContainer from "../containers/ChatContainer";
import RepositoryContainer from "../containers/RepositoryContainer";
import ExampleContainer from "../containers/ExampleContainer";

const ComponentSwitch = ({ mode, sent, received, repo, channel }) => {
    switch (mode) {
        case "example":
            return <ExampleContainer channel={channel} />;
        case "chat":
            return <ChatContainer chats={sent.concat(received)} />;
        case "repository":
            return <RepositoryContainer repo={repo} />;
        default:
            return null;
    }
};

export default ComponentSwitch;