import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import CharacterCard from '../components/CharacterCard'

const Home = () => (
  <div>
    <Head>
      <title>Star Wars Attck of the Code</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/static/manifest.json" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  </div>
)

export default Home
