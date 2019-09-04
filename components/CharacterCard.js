import Link from 'next/link'

import swapi from '../core/swapi'
import CharacterImage from './CharacterImage'

const CharacterCard = ({ active, color, fontColor, id, name, sound, url }) => {
  const cardStyle = {
    backgroundColor: color,
    color: fontColor
  }

  const playSound = () => {
    document.getElementById(`sound-${id}`).play()
  }

  return (
    <Link as={url.replace(swapi.baseURL, '')} href='/people/[id]'>
      <a
        className={active ? 'card active' : 'card'}
        style={cardStyle}
        onClick={playSound}
      >
        <div className='card-image'>
          <CharacterImage imageId={id} />
        </div>
        <div className='card-content'>
          <h1>{name}</h1>
        </div>
        <audio id={`sound-${id}`}>
          <source src={`/static/${sound}`} type='audio/mpeg' />
        </audio>
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
          .card.active .card-image {
            transform: translateX(62%);
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
            .card.active .card-image {
              transform: translateX(400px);
            }
          }
        `}
        </style>
      </a>
    </Link>
  )
}

export default CharacterCard
