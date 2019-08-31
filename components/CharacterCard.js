import React from 'react'
import Link from 'next/link'
import swapi from '../core/swapi'

const CharacterCard = ({ align, color, fontColor, id, image, name, url }) => {
  const cardStyle = {
    backgroundColor: color,
    backgroundImage: `url(/static/${image})`,
    backgroundPosition: `bottom ${align}`,
    backgroundSize: 'contain',
    color: fontColor
  }
  return (
    <div className="character-card">
      <Link as={url.replace(swapi.baseURL, '')} href="/people/[id]">
        <a className="card" style={cardStyle}>
          <div className="card-content">
            <h1>{ name }</h1>
          </div>
        </a>
      </Link>

      <style jsx>{`
          .character-card {
            height: 100%;
            position: relative;
            width: 100%;
          }
          .card {
            background-repeat: no-repeat;
            display: block;
            height: 100%;
            width: 100%;
          }
          .card-content {
            padding: 1rem;
          }
          a {
            text-decoration: none;
          }
          h1 {
            font-size: 2rem;
            margin: 0;
          }
        `}
      </style>
    </div>
  )
}

export default CharacterCard