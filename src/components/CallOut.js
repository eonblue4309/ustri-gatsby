import React from "react";
import LearnMore from "./LearnMore";

export default function CallOut({ to, children }) {
    return (
        <div>
            {children}
            {to && <LearnMore to={to} />}
        </div>
    )
}