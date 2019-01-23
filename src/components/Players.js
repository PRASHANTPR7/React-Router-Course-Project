import React, { Component } from "react";
import { Route, link } from "react-router-dom";
import slug from "slug";
import { getPlayers } from "../api";
import { parse } from "query-string";
import Sidebar from "./Sidebar";

export default class Players extends Component {
    state={
        players:[],
        loading:true
    }
    componentDidMount(){
        const {location} =this.props
        location.search ?  this.fetchplayers(parse(location.search).teamId)
        : this.fetchplayers()
    }

    fetchplayers = (teamId)=>{
    getPlayers(teamId).then((players)=>(
        this.setState(() => (
            {
                loading:false,
                players
            }
        ))
    ))
    }

  render() {
      const {players,loading} = this.state
      const {location,match} = this.props
    return (
      <div className="container two-column">
      <Sidebar 
      loading={loading}
      title='Players'
      list={players.map((player) => player.name)}
      {...this.props}>
      </Sidebar>
      {loading === false && location.pathname === '/players' ?
    <div className='sidebar-instruction'>Select a player to view information</div> : null}
        
      </div>
    );
  }
}
