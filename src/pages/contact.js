import React from 'react'
import Link from 'gatsby-link'
import InstructorCard from "../components/InstructorCard"
import members from "../members.json"

export default function Contact() {
  const contacts = Object.keys(members)
    .filter(name => 
      members[name].gengo && 
      (members[name].gengo === "Gensui" || members[name].gengo === "Genzan")
    )
    .reduce((obj, m) => {
      obj[m] = { ...members[m], name: m }
      return obj
    }, {})
  const gensui = contacts["Thomas Hufnagel"]
  const genzan = contacts["Dan Mordan"]
  return (
    <div className="content">
      <h2>Contact</h2>
      <h3>East Lansing, Michigan</h3>
      <p>{`For information regarding practice at the Honbu dojo in East Lansing, Michigan or other organizational inquires, please contact ${gensui.name}`}</p>
      <InstructorCard details={gensui}>{gensui.name}</InstructorCard>

      <h3>Macomb, Michigan</h3>
      <p>{`For information regarding practice at the Southeast Michigan branch dojo in Macomb, Michigan, please contact ${genzan.name}`}</p>
      <InstructorCard details={genzan}>{genzan.name}</InstructorCard>
    </div>
  )
}
