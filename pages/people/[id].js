
import axios from 'axios'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { baseURL } from '../../core/swapi'
import FilmCard from '../../components/FilmCard'

const fetchFilms = async (urls) =>
  Promise.all(urls.map(axios.get))
    .then(results => results
      .map(res => ({
        ...res.data,
        timestamp: new Date(res.data.release_date).getTime()
      }))
      .sort((a, b) => a.timestamp - b.timestamp)
    )

const Person = ({ data, id }) => {
  const [state, setState] = useState({
    fetched: false,
    loading: true
  })

  const [films, setFilms] = useState([])

  useEffect(() => {
    if (!state.fetched) {
      fetchFilms(data.films)
        .then(setFilms)
        .catch(error => {
          console.error('fetchFilms', error)
        })
        .finally(
          setState({
            loading: false,
            fetched: true
          })
        )
    }
  }, [data.films])

  return (
    <div className='page'>
      <Head>
        <title>{ data.name }</title>
      </Head>
      <h2>Movies</h2>
      { state.fetched &&
        <section className='grid-container'>
          {
            films.map(film => <FilmCard data={film} key={film.url} />)
          }
        </section>
      }
      <style jsx>{`
      .grid-container {
        display: grid;
        grid-gap: 0.5rem;
        grid-template-columns: 1fr;
      }

      .page {
        color: white;
        margin-top: 156px;
        padding: 0 1rem 2rem;
      }

      h2 {
        margin-top: 0;
      }

      @media (min-width: 600px) {
        .grid-container {
          grid-gap: 1rem;
          grid-template-columns: 1fr 1fr;
        }
      }

      @media (min-width: 960px) {
        .grid-container {
          grid-template-columns: 1fr 1fr 1fr;
        }
      }
      @media (min-width: 960px) {
        .grid-container {
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
      }
    `}</style>
    </div>
  )
}

Person.getInitialProps = async ({ query }) => {
  const { id } = query
  if (!id) {
    throw new Error('Unknown id')
  }

  try {
    const { data } = await axios.get(`${baseURL}/people/${id}`)

    return {
      data,
      id
    }
  } catch (error) {
    console.error(error)
    return {
      data: { films: [] },
      error,
      id
    }
  }
}

export default Person
