import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const links = {
  "Training Information": "/training-information",
  "History": "/history",
  "Resources": "/resources",
  "Contact": "/contact"
}

function Header() {
  return (
    <header className="main-header hightlight-text">
      <nav className="main-nav">
        <Link to="/" className="site-nav">United States Tamiya Ryu Iaijutsu</Link>
        {Object.keys(links).map(link =>
          <Link key={link} to={links[link]} className="site-nav">{link}</Link>
        )}
      </nav>
      <div className="masthead">
      </div>
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
