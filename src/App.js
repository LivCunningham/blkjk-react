import React, { Component } from 'react'
import Header from './components/Header'

class App extends Component {
  state = {
    game: {
      cards: []
    }
  }

  //fetch new deck
  letsPlay() {
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=2')
      .then(resp => resp.json())
      .then(newDeck => {
        console.log(newDeck)
        this.setState({
          game: newDeck
        })
      })
  }

  //show dealt cards
  //create dealer hand
  //create player hand
  //create hit, stay, play buttons

  render() {
    return (
      <>
        <Header />
        <main>
          <div className="start-game">
            {this.state.game.cards.map((card, i) => {
              return <img src={card.image} />
            })}
            <button className="lets-play" onClick={() => this.letsPlay()} />
          </div>
        </main>
      </>
    )
  }
}

export default App
