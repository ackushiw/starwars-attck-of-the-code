
import axios from 'axios'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { baseURL } from '../../core/swapi'

const fetchFilms = async (urls) =>
  Promise.all(urls.map(axios.get))
    .then(results => results.map(res => res.data))


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
  })

  return (
    <div className="page">
      <Head>
        <title>{ data.name }</title>
      </Head>
      { state.fetched &&
        <section>
          {
            films.map(film =>
              <div key={film.url}>
                <h4>{film && film.title}</h4>
              </div>
            )
          }
        </section>
      }
      <style jsx>{`
      .page {
        color: white;
        margin-top: 156px;
        padding: 1rem;
      }
    `}</style>
    </div>
  )
}

Person.getInitialProps = async ({ query }) => {
  const { id } = query
  const { data } = await axios.get(`${baseURL}/people/${id}`)

  return {
    data,
    id
  }
}

export default Person