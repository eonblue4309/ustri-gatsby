import React from "react";

export default function InstructorCard({ children: name, details }) {
    return (
        <div>
            <h4>{`${name} ${details.gengo ? `(${details.gengo})` : ""}`.trim()}</h4>
            <ul>
                {details.titles.map(title =>
                    <li key={title}>{title}</li>
                )}
                {details.email && <li>{details.email}</li>}
            </ul>
        </div>
    )
}