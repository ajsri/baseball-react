import React, { Component } from 'react'
import { Link } from 'react-router'
import LineScore from './lineScore'


class singleGame extends Component {
  constructor(props){
    super(props);
    this.state = {
      game: null
    }
  }

  componentDidMount() {
    if(!this.props.gameDay){
      this.props.getGameday();
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.gameday){
      if(nextProps.gameday.games){
        //console.log(nextProps.gameday.games[this.props.params.id]);
        this.setState({game: nextProps.gameday.games[this.props.params.id]})
      }
    }
  }

  render() {
    let game = this.state.game;
    return (
      <div>
        {game &&
          <div className="container">
            <div className="row">
              <div className="col-md-12 game-list">
                <p>{game.away_team_city} ({game.away_win} - {game.away_loss}) vs {game.home_team_city} ({game.home_win}-{game.home_loss})</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <LineScore line={game.linescore} />
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default singleGame