import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'

function App() {
  const emojis = ['😁', '😜', '😂', '🤣', '😄', '😃', '😆', '😅', '😝', '😜', '😬', '😵'];
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const jokesData = axios.get('http://localhost:5000/jokes')
      .then((response) => { console.log(response.data); setJokes(response.data) })
      .catch(err => console.log(err));
    console.log(jokesData);
  }, [])
  return (
    <>
      <div className="header">
        <h1>Backend + Frontend</h1>
        <h2>Jokes : {jokes.length}</h2>
        <div className="button">+</div>
      </div>
      <div className="container">
        <div className="jokes_container">
          <div className="cards">
            {
              jokes.map((joke, index) => {
                return (
                  <div key={index} className="card">
                    <div className='category'>category - <span>{joke.categories}</span></div>
                    <div className="joke"><h3>Joke</h3><p>{joke.joke}</p></div>
                    <div className="emoji">{emojis[Math.floor(Math.random() * emojis.length)]}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div >
    </>
  )
}

export default App
