import './index.css'

const Header = props => {
  const {score} = props
  return (
    <div className="header">
      <div className="navbarOptions">
        <h1 className="listItem">
          ROCK <br /> PAPER <br /> SCISSORS
        </h1>
      </div>
      <div className="score-container">
        <p className="score-heading">Score</p>
        <p className="score">{score}</p>
      </div>
    </div>
  )
}

export default Header
