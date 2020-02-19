import React, { useState, Fragment } from "react";
import MessageList from "../components/MessageList";

const MessageContainer = ({ sent, received }) => {
    const [toggled, setToggled] = useState("Sent");

    const onClick = ({ target }) => setToggled(target.id);

    return (
        <Fragment>
            <div>
                <button
                    className={toggled === "Sent" ? "active toggle-btn" : "toggle-btn"}
                    onClick={onClick}
                    id={"Sent"}
                >
                    Sent
                </button>
                <span className={"badge"}>{sent.length}</span>
                <button
                    className={toggled === "Received" ? "active toggle-btn" : "toggle-btn"}
                    onClick={onClick}
                    id={"Received"}
                >
                    Received
                </button>
                <span className={"badge"}>{received.length}</span>
            </div>
            <h1>{toggled} Messages</h1>
            <div className={"row"}>
                <MessageList messages={toggled === "Sent" ? sent : received} />
            </div>
        </Fragment>
    );
};

export default MessageContainer;