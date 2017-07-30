import React from 'react'
import Link from 'gatsby-link'
import members from "../memebers.json"

export default function TrainingInformation() {
  console.log(members);
  const instructors = Object.keys(members)
    .filter(m => members[m].instructor)
    .reduce((obj, m) => {
      obj[m] = { ...members[m] }
      return obj;
    }, {})
  return (
    <div>
      <section>
        <h2>Training Information</h2>

        <p>Train your body and mind. Tamiya Ryu is a koryu (literally, "old school") sword art not taught outside Japan until recently. The United States Tamiya Ryu Iaijutsu Orgranization is the only official group practicing this art in America.</p>

        <p>Training focuses on the harmonization of mind, body, and spirit through the practice and performance of kata (pre-arranged techniques). Techniques are practiced with the philosophy of the "sword which gives life (Katsujin no Ken)," as opposed to the "sword which takes life (Satsujin no Ken)."</p>

        <p>Emphasis is placed on basic techniques. To properly learn kata means studying 1) how to cut using the scabbard opening (sayaguchi) and 2) how to use the scabbard hand (sayate).</p>

        <p>Occasionally students will also practice Kenshibu - a traditional Japanese dance utilizing sword and fan. Kenshibu is performed to the accompaniment of poems (sung in a style called Shigin) that depict famous events in Japanese history.</p>
      </section>

      <section>
        <h3>Locations</h3>
      </section>

      <section>
        <h3>Instructors</h3>
        
        {Object.keys(instructors).map(name => {
          const i = instructors[name];
          return (
            <div key={name.toLowerCase()}>
              <h4>{`${name} ${i.gengo ? `(${i.gengo})` : ""}`.trim()}</h4>
            </div>
          )
        })}
      </section>
    </div>
  )
}
