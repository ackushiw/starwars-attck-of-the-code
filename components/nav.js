import React from 'react'
import Link from 'next/link'
import CharacterCard from './CharacterCard'

const Nav = ({ characters, isHome }) => (
  <nav className={isHome ? 'expand' : 'top'}>

    <div className={isHome ? 'top-bar' : 'top-bar show'}>
      <ul>
        <li>
          <Link href='/'>
            <a>
              Home
            </a>
          </Link>
        </li>
      </ul>
    </div>

    <div className={isHome ? 'container home' : 'container page'}>
      {
        characters.map(character =>
          <section
            className={
              isHome
                ? 'home' : character.active
                  ? 'active' : 'hidden'
            }
            key={character.id}
          >
            <CharacterCard {...character} />
          </section>
        )
      }
    </div>

    <style jsx>{`
      .container {
        background: #000;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        width: 100%;
        height: 100%;
        transition: all 300ms ease;
      }
      .container.page {
        grid-template-columns: auto;
        grid-template-rows: auto;
        transform: translateY(56px);
      }
      section {
        align-self: stretch;
        display: block;
        height: 100%;
        min-height: 56px;
        width: 100%;
      }
      .top-bar {
        background: #000;
        height: 56px;
        position: fixed;
        transition: transform 300ms ease;
        transform: translateY(-56px);
        width: 100%;
        z-index: 100;
      }
      .top-bar.show {
        transform: translateY(0);
      }
      nav {
        height: 100%;
        left: 0;
        overflow: hidden;
        position: fixed;
        right: 0;
        top: 0;
        transition: max-height 300ms ease;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }

      nav.expand {
        max-height: 100%;
      }
      nav.top {
        max-height: 112px;
      }

      section {
        transition: all 300ms ease;
        opacity: 1;
      }

      section.hidden {
        opacity: 0;
        transform: translateY(-50vh);
      }

      section.active {
        grid-column: 1;
        grid-row: 1 / span 2;
        z-index: 100;
      }
      
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #fff;
        font-size: 13px;
        font-weight: 600;
        text-transform: uppercase;
      }

      @media (min-width: 600px) {
        nav.top {
          max-height: 128px;
        }
        section {
          min-height: 72px;
        }
      }
    `}
    </style>
  </nav>
)

export default Nav
