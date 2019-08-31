import Head from 'next/head'

const AppHead = ({ character, title }) => (
  <Head>
    <title>{title}</title>
    <link rel='apple-touch-icon' sizes='180x180' href='/static/apple-touch-icon.png' />
    <link rel='icon' type='image/png' sizes='32x32' href='/static/favicon-32x32.png' />
    <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon-16x16.png' />
    <link rel='manifest' href='/static/manifest.json' />
    <link rel='mask-icon' href='/static/safari-pinned-tab.svg' color='#000000' />
    <meta name='msapplication-TileColor' content='#2b5797' />
    <meta name='theme-color' content='#ffffff' />
  </Head>
)

export default AppHead
