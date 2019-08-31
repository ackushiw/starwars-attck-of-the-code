export const baseURL = 'https://swapi.co/api'

export const characters = [{
  "name": "Luke Skywalker",
  "url": "https://swapi.co/api/people/1/"
}, {
  "name": "Darth Vader",
  "url": "https://swapi.co/api/people/4/"
}, {
  "name": "Obi-wan Kenobi",
  // Change unknown id to be 10 to fetch
  "url": "https://swapi.co/api/people/10/"
}, {
  "name": "R2-D2",
  // Change 2 to 3 for correct result
  "url": "https://swapi.co/api/people/3/"
}]

const charactersById = {
  1: {
    align: 'left',
    color: '#0F0',
    fontColor: '#fff',
    image: 'luke.svg',
    name: 'Luke Skywalker',
    sound: 'x_wing_flyby.mp3'
  },
  3: {
    align: 'right',
    color: '#fff',
    fontColor: '#00f',
    image: 'r2.svg',
    name: 'R2-D2',
    sound: 'r2d2.mp3'
  },
  4: {
    align: 'right',
    color: '#f00',
    fontColor: '#fff',
    image: 'vader.svg',
    name: 'Darth Vader',
    sound: 'vader.mp3'
  },
  10: {
    align: 'left',
    color: '#00f',
    fontColor: '#fff',
    image: 'obi-wan.svg',
    name: 'Obi-wan Kenobi',
    sound: 'lightsaber.mp3'
  }
}

export function getCharacterUi(url) {
  const [id] = url.match(/\d+/)

  return {
    ...charactersById[id],
    id
  }
}

export default {
  baseURL,
  characters,
  getCharacterUi
}
