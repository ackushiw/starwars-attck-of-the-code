import App from 'next/app'

import Nav from '../components/nav'
import { characters, getCharacterUi } from '../core/swapi'

class AppShell extends App {
  render () {
    const { Component, pageProps, router } = this.props
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
          <Component {...pageProps} />
        </main>
        <style jsx global>{`
          body { 
            background: #000;
            color: #fff;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
            font-size: 16px;
            margin: 0;
          }

          .card-image svg {
            height: 100%;
            width: 100%;
          }
        `}
        </style>
      </div>
    )
  }
}

export default AppShell
