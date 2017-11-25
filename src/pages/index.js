import React from 'react';
import Link from 'gatsby-link';
import LearnMore from '../components/LearnMore';
import CallOut from '../components/CallOut';

export default function IndexPage() {
  return (
    <div className="content">
      <Introduction />
      <CallOuts />
      <WhatIs />
      <Locations />
    </div>
  );
}

function Introduction() {
  return (
    <section className="content__section">
      <h1>A Traditional Japanese Sword Drawing Martial Art In Michigan</h1>

      <p>
        The United States Tamiya Ryu Iaijustu Ogranization is an official branch
        of the Tamiya Ryu Iaijutsu Genwakai and is headquarted in East Lansing,
        Michigan with a branch dojo located in Macomb, Michigan.
      </p>

      <p>
        We are the only official representatives of this 400+ year old koryu art
        in the United States. Here you will find the{' '}
        <Link to="/history">history of Tamiya Ryu Iaijutsu</Link> and the{' '}
        <Link to="/history">
          history of the United States Tamiya Ryu Iaijutsu Gengo Hojisha no Kai
        </Link> as well as information on{' '}
        <a href="/locations">where to find a dojo location</a> and{' '}
        <Link to="contact">how to join</Link>. We hope to see you on the dojo
        floor soon!
      </p>

      <LearnMore to="training-information" />
    </section>
  );
}

function CallOuts() {
  return (
    <section className="content__section">
      <CallOut>
        <h2>USTRI 20th Anniversary Taikai</h2>

        <p>
          2017 marks the 20th anniversary of the United States Tamiya Ryu
          Iaijutsu Orgranization. To help celebrate the occasion, Tamiya Ryu
          Iaijutsu Soke Tsumaki Sensei and Endo Sensei will be visitng Michigan
          from Thursday, July 13th through Tuesday, July 18th.
        </p>

        <p>
          Training will be held at the Michigan Honbu on Friday, July 14th and
          will be conducting Formal Testing at the East Lansing Community Center
          on Saturday, July 15th.
        </p>
      </CallOut>

      <CallOut to="/resources">
        <h2>Message from the Head Instructor</h2>

        <p>Gennan Buhaku sensei shares his thoughts on various topics.</p>
      </CallOut>

      <CallOut to="/east-lansing-michigan-honbu-dojo">
        <h2>Announcement</h2>

        <p>
          We are excited to announce the Michigan Honbu in East Lansing is
          offering a free introductory month. Visit the training information
          page for more information!
        </p>
      </CallOut>

      <CallOut>
        <h2>Introduction Video</h2>

        <p>
          Please note that some of the locaiton information in the below video
          has changed but the information specific to the practice of Tamiya Ryu
          Iaijutsu remains the same!
        </p>

        <iframe
          width="100%"
          height="480"
          src="https://www.youtube.com/embed/w80xfxDG0jE"
          frameBorder="0"
          allowFullScreen
        />
      </CallOut>
    </section>
  );
}

function Locations() {
  return (
    <section>
      <h3>Locations</h3>

      <CallOut to="east-lansing-michigan-honbu-dojo">
        <h4>East Lansing, Michigan - Michigan Honbu Dojo</h4>
        <p>
          The Michigan Honbu dojo is the headquarters for Tamiya Ryu Iajiutsu
          operations in the United States
        </p>
      </CallOut>

      <CallOut to="southeast-michigan-branch-dojo">
        <h4>Macomb, Michigan - Southeast Michigan Dojo</h4>
        <p>
          The Southeast Michigan Branch dojo holds class at the Macomb Township
          Parks &amp; Recreation Center.
        </p>
      </CallOut>
    </section>
  );
}

function WhatIs() {
  return (
    <section>
      <div className="content__section">
        <h3>Iaijutsu</h3>

        <p>
          Iaijutsu is a martial art (bujutsu) that strives to supress a sudden
          attack by the attacker against the defender using a single, swift
          stroke of the sword and seeks to master the various principles of
          drawing, re - sheathing and using the sword.
        </p>

        <p>
          Furthermore, iaijutsu is a martial way (budo) as it practiced with a
          humble and modest heart and continually trains the spirit.
        </p>
      </div>

      <div className="content__section">
        <h3>Tamiya Ryu</h3>

        <p>
          Tamiya Ryu Iaijutsu is a military art (bugei) that was introduced in
          the Tensho period (1573 - 1591) by its founder, Tamiya Heibei
          Narimasa.Narimasa, together with Katayama Hoki no kami Hisayasu (the
          founder of Hoki Ryu) and Sekiguchi Jushin (the founder of Sekiguchi
          Ryu) were pupiles of Hayashizake Jinsuke Shigenobu, the founder of
          iaijutsu.
        </p>

        <p>
          The style characteristics of the Tamiya school of swordsmenship are:
          First volume (Omote no maki) containing evelen kata and Second volume
          (Koran no maki) containing fourteen kata. As a serious course of
          study, learning Tamiya Ryu Iaijutsu involves having a clear
          understanding of the concepts known as "Tamiya Nobility" and "Tamiya
          Purity".
        </p>
      </div>
    </section>
  );
}
