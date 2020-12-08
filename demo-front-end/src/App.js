import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import SongCard from './SongCard';
import Container from 'react-bootstrap/Container'
import Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const initialState = {
  isLoading: true,
  songs: []
}
const App = () => {


  const [data, setData] = useState(initialState)

  const getData = async () => {
    const response = await fetch('/api/songs');
    const body = await response.json()
    setData({ songs: body, isLoading: false })
  }

  useEffect(() => {
    getData()
  }, [])

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Container>
        
          <div className="App-intro">
          <h2 style={{color: 'white'}}>Song List</h2>
          <hr></hr>
          <Row>
          {data.songs.map(song =>
              <Col>
                 <SongCard key={song.id} song={song} />
              </Col>
           
          )}
          </Row>
        </div>
          
      </Container>
        
      </header>
    </div>
  )
}
export default App;
