import React from "react";
import LearnMore from "./LearnMore";

const styles = {
    background: "white",
    padding: "2em",
    margin: "3rem 1rem",
    boxShadow: `0 2px 2px 0 rgba(0,0,0,0.14), 
                0 3px 1px -2px rgba(0,0,0,0.2), 
                0 1px 5px 0 rgba(0,0,0,0.12)`,
    borderRadius: "2px",
    display: "flex",
    flexDirection: "column"
}

export default function CallOut({ to, children }) {
    return (
        <div style={styles}>
            {children}
            {to && <LearnMore to={to} />}
        </div>
    )
}