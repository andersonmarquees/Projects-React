import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {

  const [ tours, setTours ] = useState([]);
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ error, setError ] = useState('');
  const [ refreshTours, setRefreshTours ] = useState(false);

  const handleDelete = (id) => {
    const newTours = tours.filter((tour) => id !== tour.id)
    setTours(newTours)
  }

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        setIsLoaded(!isLoaded);
        setTours(result);
      },
      (error) => {
        setIsLoaded(isLoaded);
        setError(error);
      }
    );
  }, [!refreshTours]);

  if(error) {
    return (
      <main>
        Error: {error.message}
      </main>
    )
  } else if (!error && !isLoaded && !refreshTours) {
    return (
      <main>
        <Loading/>
      </main>
    )
  } else if (tours.length === 0) {
    return (
      <main>
      <div className="title">
        <h2>ours tours left</h2>
        <button className="btn" onClick={() => setRefreshTours(!refreshTours)}>
          refresh
        </button>
      </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} handleDelete={handleDelete}/>
    </main>
  )
}

export default App
