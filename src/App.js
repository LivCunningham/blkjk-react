import React, { Component } from 'react'
import Header from './components/Header'

class App extends Component {
  state = {
    game: {
      cards: [],
      playerHand: [],
      dealerHand: [],
      deck: ''
    }
  }

  //fetch new deck
  letsPlay() {
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=2')
      .then(resp => resp.json())
      .then(newDeck => {
        console.log(newDeck)
        this.setState({
          game: newDeck,
          deck: newDeck.deck_id
        })
      })
  }

  //reset the game
  resetMe = () => {
    this.setState({
      game: {
        cards: []
      }
    })
  }

  //hit player on button play
  hitMe = () => {
    fetch(
      `https://deckofcardsapi.com/api/deck/${this.state.deck}/draw/?count=1`
    )
      .then(resp => resp.json())
      .then(newDeck => {
        console.log(newDeck)
        this.setState({
          game: newDeck,
          deck: newDeck.deck_id,
          playerHand: newDeck.deck_id
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
        <main className="">
          <div className="start-game">
            {this.state.game.cards.map((card, i) => {
              return <img src={card.image} />
            })}
            <div className="button-panel">
              <button className="lets-play" onClick={() => this.letsPlay()}>
                Let's play
              </button>
              <button
                className="hit-me"
                onClick={() =>
                  this.hitMe.concat((card, j) => {
                    return <img src={card.image} />
                  })
                }
              >
                Hit me!
              </button>
              <button className="ill-stay">I'll stay.</button>
              <button className="reset-me" onClick={() => this.resetMe()}>
                Reset.
              </button>
            </div>
          </div>
        </main>
      </>
    )
  }
}

export default App
