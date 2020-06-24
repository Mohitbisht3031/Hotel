import React from "react"
import Card from "./Card"
import Options from "./Option"

const Home = () => {
  return (
    <div>
      <div>
        <Options />
      </div>
      <div className="center flex-container wrap mt-4 mr-4 ml-4 home">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Home
