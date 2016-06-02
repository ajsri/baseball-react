import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'


class Games extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    if(!this.props.gameday){
      this.props.getGameday();
    }
  }

  render() {
    let { gameday } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="game-list">
              {gameday && gameday.games && gameday.games.map((game, i = 0) => {
                return (
                  <div key={i} className="game-box">
                    <div className="team-image-container">
                      <div className="team-image">
                        <img src={`./images/${game.away_name_abbrev}.gif`}/>
                        <h3>{game.linescore.r.away}</h3>
                        <p>({game.away_win} - {game.away_loss})</p>
                      </div>
                      <div>
                        {game.status.status}
                      </div>
                      <div className="team-image">
                        <img src={`./images/${game.home_name_abbrev}.gif`}/>
                        <h3>{game.linescore.r.home}</h3>
                        <p>({game.home_win} - {game.home_loss})</p>
                      </div>
                    </div>
                    <Link to={`/game/${i}`}>
                      {game.away_team_city} @ {game.home_team_city}
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Games