import React from "react";

const ToggleBtns = ({ options, onToggle, toggled }) => {
    return options.map(opt => {
        return (
            <button
                key={opt}
                id={opt}
                className={toggled === opt ? "active toggle-btn" : "toggle-btn"}
                onClick={onToggle}
            >
                {opt}
            </button>
        )
    });
};

export default ToggleBtns;