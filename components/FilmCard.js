const FilmCard = ({ data }) => {
  const date = new Date(data.release_date)
  const dateOptions = {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
    year: 'numeric'
  }

  return (
    <div className='film-card' key={data.url}>
      <div className='card-content'>
        <h3>{data.title}</h3>
        <p className='caption'>{date.toLocaleDateString('en-US', dateOptions)}</p>
      </div>
      <style jsx>{`
        .caption {
          font-size: 0.8rem
        }
        .card-content {
          padding: 1rem;
        }
        .film-card {
          background-color: #333;
          border: #999 2px solid;
          border-radius: 5px;
        }
        h3 {
          margin-bottom: 0;
        }
      `}
      </style>
    </div>
  )
}

export default FilmCard
