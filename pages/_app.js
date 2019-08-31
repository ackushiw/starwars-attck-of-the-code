import App from 'next/app'
import React from 'react'

import Nav from '../components/nav'
import { characters, getCharacterUi } from '../core/swapi'

class AppShell extends App {
  render () {
    const { Component, pageProps, router } = this.props
    const { query } = router
    const isHome = router.pathname === '/'

    const characterCards = characters.map(character => ({
      ...character,
      ...getCharacterUi(character.url),
      active: !isHome && character.url.includes(router.asPath)
    }))

    return (
      <div>
        <Nav characters={characterCards} isHome={isHome} />
        <main>
          <Component { ...pageProps } />
        </main>
        <style jsx global>{`
          body { 
            background: #000;
            color: #fff;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
            font-size: 16px;
            margin: 0;
          }
        `}
        </style>
      </div>
    )
  }
}

export default AppShell