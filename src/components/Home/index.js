import './index.css'
import {Component} from 'react'

import Header from '../Header'
import Rules from '../Rules'
import GameResult from '../GameResultView'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Home extends Component {
  state = {
    opponentId: '',
    userChoice: '',
    score: 0,
    displayGameView: true,
  }

  onClickPlayAgain = () => {
    this.setState({displayGameView: true})
  }

  incrementScoreOnWin = () => {
    const result = this.resultText()
    console.log(result)
    if (result === 'YOU WON') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (result === 'YOU LOSE') {
      this.setState(prevState => ({score: prevState.score - 1}))
    }
  }

  onClickUserChoice = event => {
    const randomNumber = Math.floor(Math.random() * choicesList.length)
    this.setState(
      {
        userChoice: event.target.id,
        displayGameView: false,
        opponentId: choicesList[randomNumber].id,
      },
      this.incrementScoreOnWin,
    )
  }

  resultText = () => {
    const {userChoice, opponentId} = this.state
    let text
    switch (opponentId) {
      case userChoice:
        text = 'IT IS DRAW'
        break
      case 'ROCK':
        if (userChoice === 'SCISSORS') {
          text = 'YOU LOSE'
        } else if (userChoice === 'PAPER') {
          text = 'YOU WON'
        }
        break
      case 'PAPER':
        if (userChoice === 'ROCK') {
          text = 'YOU LOSE'
        } else if (userChoice === 'SCISSORS') {
          text = 'YOU WON'
        }
        break
      case 'SCISSORS':
        if (userChoice === 'PAPER') {
          text = 'YOU LOSE'
        } else if (userChoice === 'ROCK') {
          text = 'YOU WON'
        }
        break
      default:
        text = null
    }

    return text
  }

  renderGameContainer = () => (
    <div className="row">
      <button
        type="button"
        data-testid="rockButton"
        onClick={this.onClickUserChoice}
        className="optionButtons"
      >
        <img
          src={choicesList[0].imageUrl}
          alt={choicesList[0].id}
          id={choicesList[0].id}
          className="choice"
        />
      </button>
      <button
        type="button"
        data-testid="paperButton"
        onClick={this.onClickUserChoice}
        className="optionButtons"
      >
        <img
          src={choicesList[1].imageUrl}
          alt={choicesList[1].id}
          id={choicesList[1].id}
          className="choice"
        />
      </button>
      <button
        type="button"
        data-testid="scissorsButton"
        onClick={this.onClickUserChoice}
        className="optionButtons"
      >
        <img
          src={choicesList[2].imageUrl}
          alt={choicesList[2].id}
          id={choicesList[2].id}
          className="choice"
        />
      </button>
    </div>
  )

  render() {
    const {score, displayGameView, opponentId, userChoice} = this.state

    const opponentImageUrl = choicesList.find(item => item.id === opponentId)
    const userChoiceImageUrl = choicesList.find(item => item.id === userChoice)
    return (
      <div className="app-container">
        <Header score={score} />
        <div className="game-container">
          {displayGameView ? (
            <>
              {this.renderGameContainer()}
              <Rules />
            </>
          ) : (
            <GameResult
              onClickPlayAgain={this.onClickPlayAgain}
              resultText={this.resultText()}
              opponentImageUrl={opponentImageUrl.imageUrl}
              userChoiceImageUrl={userChoiceImageUrl.imageUrl}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Home
