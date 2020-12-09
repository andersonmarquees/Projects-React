import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {

  const [ jobs, setJobs ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState('');
  const [ index, setIndex ] = useState(0);

  useEffect(() => {

    fetch(url)
      .then(response => response.json())
      .then(result => {
        setJobs(result)
        setIsLoading(!isLoading)
      },
      (error) => {
        setIsLoading(isLoading)
        setError(error)
      }
    );

  }, []);

  if(error) {
    return (
      <section className="section">
        Error: {error.message}
      </section>
    );
  }
  if(!isLoading && !error) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }
  const { company, dates, duties, title } = jobs[index]

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, value) => {
            return (
              <button
                key={job.id}
                type="button"
                onClick={() => setIndex(value)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {job.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"/>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
      <button className="btn" type="button">more info</button>
    </section>
  );
}

export default App
