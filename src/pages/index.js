import React from 'react'
import LearnMore from "../components/LearnMore"
import CallOut from "../components/CallOut";

export default function IndexPage() {
  return (
    <section>
      <h1>A Traditional Japanese Sword Drawing Martial Art In Michigan</h1>
      
      <p>The United States Tamiya Ryu Iaijustu Ogranization is an official branch of the Tamiya Ryu Iaijutsu Genwakai and is headquarted in East Lansing, Michigan with a branch dojo located in Macomb, Michigan.</p>
      
      <p>We are the official representatives of this 400+ year old koryu art in the United States. Here you will find the history of both Tamiya Ryu and its history in the United States as well as information on where to find a dojo and how to join. We hope to see you on the dojo floor soon!</p>

      <LearnMore to="training-information" />

      <CallOut>
        <h2>USTRI 20th Anniversary Taikai</h2>
        
        <p>2017 marks the 20th anniversary of the United States Tamiya Ryu Iaijutsu Orgranization. To help celebrate the occasion, Tamiya Ryu Iaijutsu Soke Tsumaki Sensei and Endo Sensei will be visitng Michigan from Thursday, July 13th through Tuesday, July 18th.</p>

        <p>Training will be held at the Michigan Honbu on Friday, July 14th and will be conducting Formal Testing at the East Lansing Community Center on Saturday, July 15th.</p>
      </CallOut>

      <CallOut to="/resources">
        <h2>Message from the Head Instructor</h2>

        <p>Gennan Buhaku sensei shares his thoughts on various topics.</p>
      </CallOut>
      
    </section>
  );
}
