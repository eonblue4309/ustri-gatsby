import React from 'react'
import Link from 'gatsby-link'
import InstructorCard from "../components/InstructorCard"
import { Details as Honbu } from "./east-lansing-michigan-honbu-dojo"
import { Details as Southeast } from "./southeast-michigan-branch-dojo"
import members from "../members.json"

export default function TrainingInformation() {
  const instructors = Object.keys(members)
    .filter(m => members[m].instructor)
    .reduce((obj, m) => {
      obj[m] = { ...members[m] }
      return obj;
    }, {})
  return (
    <div>
      <Introduction />
      <Locations />
      <Instructors instructors={instructors} />
    </div>
  )
}

function Introduction() {
  return (
    <section>
      <h2>Training Information</h2>

      <p>Train your body and mind. Tamiya Ryu is a koryu (literally, "old school") sword art not taught outside Japan until recently. The United States Tamiya Ryu Iaijutsu Orgranization is the only official group practicing this art in America.</p>

      <p>Training focuses on the harmonization of mind, body, and spirit through the practice and performance of kata (pre-arranged techniques). Techniques are practiced with the philosophy of the "sword which gives life (Katsujin no Ken)," as opposed to the "sword which takes life (Satsujin no Ken)."</p>

      <p>Emphasis is placed on basic techniques. To properly learn kata means studying 1) how to cut using the scabbard opening (sayaguchi) and 2) how to use the scabbard hand (sayate).</p>

      <p>Occasionally students will also practice Kenshibu - a traditional Japanese dance utilizing sword and fan. Kenshibu is performed to the accompaniment of poems (sung in a style called Shigin) that depict famous events in Japanese history.</p>
    </section>
  )
}

function Locations() {
  return (
    <section>
      <h3>Locations</h3>
      <Honbu />
      <Southeast />
    </section>
  )
}

function Instructors({ instructors }) {
  return (
    <section>
      <h3>Instructors</h3>
      <ol>
        {Object.keys(instructors).map(name =>
          <li key={name.toLowerCase()}>
            <InstructorCard details={instructors[name]}>{name}</InstructorCard>
          </li>
        )}
      </ol>
    </section>
  )
}