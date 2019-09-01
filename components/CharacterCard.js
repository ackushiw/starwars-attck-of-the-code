import React from 'react'
import Link from 'next/link'
import swapi from '../core/swapi'

const CharacterCard = ({ active, align, color, fontColor, id, image, name, url }) => {
  const cardStyle = {
    backgroundColor: color,
    color: fontColor
  }
  const cardImageStyle = {
    backgroundImage: `url(/static/${image})`,
    backgroundPosition: `bottom ${align}`,
    backgroundSize: 'contain'
  }
  return (
    <Link as={url.replace(swapi.baseURL, '')} href='/people/[id]'>
      <a className='card' style={cardStyle}>
        <div className='card-image' style={cardImageStyle} />
        <div className='card-content'>
          <h1>{ name }</h1>
        </div>
        <style jsx>{`
          .card {
            display: block;
            height: 100%;
            overflow: hidden;
            position: relative;
            width: 100%;
          }
          .card-content {
            padding: 1rem;
            position: relative;
          }
          .card-image {
            background-repeat: no-repeat;
            bottom: 0;
            height: 80%;
            left: 1rem;
            position: absolute;
            right: 1rem;
            transition: transform 100ms ease;
            width: calc(100% - 2rem);
          }
          a {
            text-decoration: none;
          }
          h1 {
            font-size: 1.2rem;
            margin: 0;
          }

          @media (min-width: 600px) {
            h1 {
              font-size: 2rem;
            }
          }
        `}
        </style>
      </a>
    </Link>
  )
}

export default CharacterCard
