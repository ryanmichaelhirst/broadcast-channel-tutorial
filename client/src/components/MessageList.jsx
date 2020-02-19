import React from "react";

const MessageList = ({ messages, showDate }) => {
    if (messages.length === 0) {
        return <div>No messages yet :(</div>;
    }

    return messages.map((m, idx) => {
        const className = m.type === "sent" ? "msg-sent" : "msg-received";
        return (
            <div key={`${m.msg}-${idx}`} className={`msg-bubble ${className}`}>
                {showDate &&
                    <p className={"msg-timestamp"}>
                        {m.date.toUTCString()}
                    </p>
                }
                <p>{m.msg} {m.emoji}</p>
            </div>
        );
    });
};

export default MessageList;