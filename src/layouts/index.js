import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.css';

const links = {
  'Training Information': '/training-information',
  History: '/history',
  Resources: '/resources',
  Contact: '/contact',
};

class Header extends React.Component {
  constructor() {
    super();
    this.state = {showNav: false};
    this.toggleNav = this.toggleNav.bind(this);
    this.hideNav = this.hideNav.bind(this);
  }

  toggleNav() {
    this.setState({showNav: !this.state.showNav});
  }

  hideNav() {
    this.setState({showNav: false});
  }

  render() {
    return (
      <header className="main-header hightlight-text">
        <nav className="main-nav">
          <Link to="/" className="site-nav site-nav--home">
            United States Tamiya Ryu Iaijutsu
          </Link>
          <button
            className="main-nav__toggle"
            onClick={this.toggleNav}
            aria-label="menu"
          />
          <div
            className={`main-nav__links ${
              this.state.showNav ? 'show' : 'hide'
            }`}>
            <button
              className="site-nav site-nav--close site-nav--floating"
              onClick={this.hideNav}>
              Close
            </button>
            <Link to="/" className="site-nav site-nav--floating">
              Home
            </Link>
            {Object.keys(links).map(link => (
              <Link key={link} to={links[link]} className="site-nav">
                {link}
              </Link>
            ))}
          </div>
        </nav>
        <div className="masthead" />
      </header>
    );
  }
}

function Aside() {
  return (
    <aside className="main-aside">
      <h2>United Status Tamiya Ryu Iaijutsu</h2>
    </aside>
  );
}

function Footer() {
  return (
    <footer className="main-footer">
      <p>Site by James Russell (Gennetsu)</p>
    </footer>
  );
}

function TemplateWrapper({children}) {
  return (
    <main>
      <Helmet
        title="United States Tamiya Ryu Iaijutsu - Traditional Japanese Swordsmanship"
        meta={[
          {
            name: 'description',
            content:
              'Official representatives in America of Tamiya Ryu Iaijutsu, a traditional school (koryu) or Japanese swordsmanship.',
          },
          {
            name: 'keywords',
            content:
              'iaijutsu, iaido, koryu, swordsmanship, swords, katana, japanese, mindfulness',
          },
        ]}
      />
      <Header />
      {children()}
      <Aside />
      <Footer />
    </main>
  );
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
