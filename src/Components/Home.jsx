import React from 'react'
import CarouselComponent from './CarouselC'
import Card from './Card'
import Section from './Section'
import Message from './Message'

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <CarouselComponent/>
        <Card/>
        <Section/>
        <Message/>
      </div>
    </div>
  )
}

export default Home
