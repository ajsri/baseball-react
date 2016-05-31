import React, { Component } from 'react'
import { Link } from 'react-router'


class Games extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.getGameday();
  }

  render() {
    let { gameday } = this.props
    return (
      <div>
        {gameday && gameday.games && gameday.games.map((game, i) => {
          return (
            <div>{game.away_team_city} @ {game.home_team_city}</div>
          )
        })}
      </div>
    )
  }
}

export default Games