import React from 'react'
import Banner from './Banner/Banner'
import "./HomeScreen.css"
import Navbar from './Navbar/Navbar'
import Row from './Row/Row'
import requests from '../../Request'

const HomeScreen = () => {
  return (
    <section>
      <Navbar />
      <Banner />
      <Row
        title = "NETFLIX ORIGINALS"
        fetch={requests.fetchNetflixOriginals}
        isLargeRow
      />
        <Row
          title = "Trending Now"
          fetch={requests.fetchTrending}
        />
      <Row
        title = "Top Rated"
        fetch={requests.fetchTopRated}
      />
      <Row
        title = "Action Movies"
        fetch={requests.fetchActionMovies}
      />
      <Row
        title = "Comedy Movies"
        fetch={requests.fetchComedyMovies}
      />
      <Row
        title = "Horror Movies"
        fetch={requests.fetchHorrorMovies}
      />
      <Row
        title = "Romance Movies"
        fetch={requests.fetchRomanceMovies}
      />
      <Row
        title = "Documentaries"
        fetch={requests.fetchDocumentaries}
      />
    </section>
  )
}

export default HomeScreen