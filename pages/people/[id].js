import { useState, useEffect } from 'react'

import { fetchAndPersist } from '../../core'
import { baseURL } from '../../core/swapi'
import FilmCard from '../../components/FilmCard'
import Head from '../../components/Head'

const fetchFilms = async (urls) =>
  Promise.all(urls.map(url => fetchAndPersist(url)))
    .then(results => results
      .map(data => ({
        ...data,
        timestamp: new Date(data.release_date).getTime()
      }))
      .sort((a, b) => a.timestamp - b.timestamp)
    )

const Person = ({ data, error, id }) => {
  const [state, setState] = useState({
    error,
    fetched: false,
    loading: true
  })

  const [films, setFilms] = useState([])

  useEffect(() => {
    let isMounted = true
    if (!state.fetched) {
      setState({
        loading: true
      })
      fetchFilms(data.films)
        .then(films => {
          if (isMounted) {
            setFilms(films)
            setState({
              error: null,
              fetched: true,
              loading: false
            })
          }
        })
        .catch(err => {
          console.error('fetchFilms', error)
          if (isMounted) {
            setState({
              error: err,
              fetched: true,
              loading: false
            })
          }
        })
    }
    return () => { isMounted = false }
  }, [data.films])

  return (
    <div className='page'>
      <Head title={data.name} />
      <h2>Movies</h2>
      <pre>{ error && error.message }</pre>
      { state.fetched
        ? (
          <section className='grid-container'>
            {
              films.map(film => <FilmCard data={film} key={film.url} />)
            }
          </section>
        ) : state.loading ? <p>Loading movies...</p> : null
      }
      <style jsx>{`
      .grid-container {
        display: grid;
        grid-gap: 0.5rem;
        grid-template-columns: 1fr;
      }

      .page {
        color: white;
        margin-top: 128px;
        padding: 1rem 1rem 2rem;
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
    throw new Error('No id')
  }

  try {
    const data = await fetchAndPersist(`${baseURL}/people/${id}/`)
    return { data, error: null, id }
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
