import React from "react";
import MessageList from "../components/MessageList";

const RepositoryContainer = ({ repo }) => {
    return <MessageList messages={repo} showDate={true} />;
};

export default RepositoryContainer;