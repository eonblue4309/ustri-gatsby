import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const styles = {
  nav: { color: "inherit", textDecoration: 'none' }
}

const links = {
  "Training Information": "/training-information",
  "History": "/history",
  "Resources": "/resources",
  "Contact": "/contact"
}

function Header() {
  return (
    <header style={{ background: '#212121', color: 'white', padding: "1rem" }}>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={styles.nav}>United States Tamiya Ryu Iaijutsu</Link>
      </h1>
      <nav>
        {Object.keys(links).map(link =>
          <Link key={link} to={links[link]} className="main-nav">{link}</Link>
        )}
      </nav>
    </header>
  )
}

function TemplateWrapper({ children }) {
  return (
    <main>
      <Helmet
        title="United States Tamiya Ryu Iaijutsu - Traditional Japanese Swordsmanship"
        meta={[
          { name: 'description', content: 'Official representatives in America of Tamiya Ryu Iaijutsu, a traditional school (koryu) or Japanese swordsmanship.' },
          { name: 'keywords', content: 'iaijutsu, iaido, koryu, swordsmanship, swords, katana, japanese, mindfulness' },
        ]}
      />
      <Header />
      {children()}
    </main>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
