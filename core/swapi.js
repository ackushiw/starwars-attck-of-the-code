export const baseURL = 'https://swapi.co/api'

export const characters = [{
  name: 'Luke Skywalker',
  url: 'https://swapi.co/api/people/1/'
}, {
  name: 'Darth Vader',
  url: 'https://swapi.co/api/people/4/'
}, {
  name: 'Obi-wan Kenobi',
  // Change unknown id to be 10 to fetch
  url: 'https://swapi.co/api/people/10/'
}, {
  name: 'R2-D2',
  // Change 2 to 3 for correct result
  url: 'https://swapi.co/api/people/3/'
}]

const charactersById = {
  luke: {
    align: 'left',
    color: '#6BE044',
    fontColor: '#fff',
    id: 'luke',
    name: 'Luke Skywalker',
    sound: 'x_wing_flyby.mp3'
  },
  r2: {
    align: 'right',
    color: '#E5E5EC',
    fontColor: '#00236D',
    id: 'r2',
    name: 'R2-D2',
    sound: 'r2d2.mp3'
  },
  vader: {
    align: 'right',
    color: '#CE0C2C',
    fontColor: '#000',
    id: 'vader',
    name: 'Darth Vader',
    sound: 'vader.mp3'
  },
  obi: {
    align: 'left',
    color: '#2F67F8',
    fontColor: '#fff',
    id: 'obi',
    name: 'Obi-wan Kenobi',
    sound: 'lightsaber.mp3'
  }
}

export function getCharacterId (url) {
  const [num] = url.match(/\d+/)
  switch (num) {
    case '1': return 'luke'
    case '3': return 'r2'
    case '4': return 'vader'
    case '10': return 'obi'
    default: return 'unknown'
  }
}

export const getCharacterUi = (url) => charactersById[getCharacterId(url)]

export default {
  baseURL,
  characters,
  getCharacterUi
}
