import React, { useState, useEffect, Fragment } from "react";
import FormContainer from "../containers/FormContainer";
import ComponentSwitch from "../components/ComponentSwitch";
import ToggleBtns from "../components/ToggleBtns";

const channel = new BroadcastChannel("main");
const repoChannel = new BroadcastChannel("main");

const Homepage = () => {
    const [mode, setMode] = useState("example");
    const [received, setReceived] = useState([]);
    const [sent, setSent] = useState([]);
    const [repo, setRepo] = useState([]);

    useEffect(() => {
        channel.onmessage = ({ data }) => {
            console.log(`listener received message!`, { data });
            setReceived(prevState => ([ ...prevState, { ...data, type: "received" }]));
        };
        repoChannel.onmessage = ({ data }) => {
            setRepo(prevState => ([ ...prevState, { ...data } ]));
        };
    }, []);

    const onToggle = e => setMode(e.target.id);

    return (
        <Fragment>
            <ToggleBtns
                options={["example", "chat", "repository"]}
                toggled={mode}
                onToggle={onToggle}
            />
            {mode !== "example" &&
                <FormContainer
                    setSent={setSent}
                    channel={channel}
                />
            }
            {channel &&
                <ComponentSwitch
                    mode={mode}
                    sent={sent}
                    received={received}
                    repo={repo}
                    channel={channel}
                />
            }
        </Fragment>
    );
};

export default Homepage;