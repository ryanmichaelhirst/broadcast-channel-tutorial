import React, { useState } from "react";
import fruits from "../data";

const FormContainer = ({ setSent, channel }) => {
    const [selectVal, setSelectVal] = useState('🍎');
    const [inputVal, setInputVal] = useState("");

    const getItem = emoji => fruits.find(f => f.emoji === emoji);

    const onInputChange = e => setInputVal(e.target.value);

    const onChange = e => setSelectVal(e.target.value);

    const onClick = () => {
        const data = {
            ...getItem(selectVal),
            date: new Date(),
            msg: inputVal,
            type: "sent"
        };
        channel.postMessage({ ...data });
        setSent(prevState => ([ ...prevState, { ...data }]));
    };

    return (
        <div className={"form"}>
            <input
                placeholder={"Type your message.."}
                style={{ height: 100 }}
                onChange={onInputChange}
                value={inputVal}
            />
            <select onChange={onChange} name={"fruit-select"} value={selectVal}>
                {fruits.map(f => {
                    return <option key={f.label} value={f.emoji}>{f.emoji} {f.label}</option>
                })}
            </select>
            <button className={"submit-btn"} onClick={onClick}>
                Submit
            </button>
        </div>
    );
};

export default FormContainer;