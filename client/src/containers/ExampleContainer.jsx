import React, { useState, useEffect } from "react";
// const channel = new BroadcastChannel("main");
const allChannel = new BroadcastChannel("main");

const ExampleContainer = ({ channel }) => {
    const [msg, setMsg] = useState("");
    const [sent, setSent] = useState([]);
    const [received, setReceived] = useState([]);
    const [all, setAll] = useState([]);

    useEffect(() => {
        channel.onmessage = ({ data }) => setReceived(prevState => ([...prevState, data]));
        allChannel.onmessage = ({ data }) => setAll(prevState => ([...prevState, data]));
    }, []);

    const onChange = e => setMsg(e.target.value);

    const onClick = () => {
        const item = { msg, type: "sent", date: new Date() };
        setSent(prevState => ([...prevState, item]));
        setMsg("");
        channel.postMessage(item);
    };

    return (
        <div style={{ marginTop: 40 }}>
            <input value={msg} onChange={onChange} />
            <button className={"submit-btn"} onClick={onClick}>Send message</button>
            <h2>Sent messages</h2>
            {sent.map((msg, idx) => {
                return <p key={`${msg}-${idx}`}>{msg.msg} - {msg.date.toTimeString()}</p>
            })}
            <h2>Received messages</h2>
            {received.map((msg, idx) => {
                return <p key={`${msg}-${idx}`}>{msg.msg} - {msg.date.toTimeString()}</p>
            })}
            <h2>All messages</h2>
            {all.map((msg, idx) => {
                return <p key={`${msg}-${idx}`}>{msg.msg} - {msg.date.toTimeString()}</p>
            })}
        </div>
    );
};

export default ExampleContainer;