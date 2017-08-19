import React from "react";
import Link from "gatsby-link";

const style = {
    padding: "0.85em 1.2em",
    background: "transparent",
    color: "#212121",
    border: "4px solid currentColor",
    textDecoration: "none",
    fontWeight: "bold",
    display: "inline-block",
    margin: "auto"
}

export default function LearnMore({ to }) {
    return (
        <Link to={to} style={style}>Learn More</Link>
    )
}