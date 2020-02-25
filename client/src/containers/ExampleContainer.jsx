import React, { useEffect } from "react";

const bc = new BroadcastChannel("tester");
const all = new BroadcastChannel("tester");

const ExampleContainer = () => {
    useEffect(() => {
        bc.onmessage = e => console.log("i receive msgs from tabs EXCEPT the sender", e);

        all.onmessage = e => console.log("i receive msgs from ALL tabs", e);
    }, []);

    bc.postMessage("test msg!");

    return (
        <div>Open 2 tabs, refresh 1, then check the console!</div>
    );
};

export default ExampleContainer;