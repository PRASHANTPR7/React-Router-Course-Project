import React,{Component} from 'react'
import TeamLogo from './Teamlogo'
import {getTeamNames} from '../api'
import {Link} from 'react-router-dom'

export default class Home extends Component{
    state = {
        teamNames:[]
    }

    componentDidMount() {
        getTeamNames()
        .then((teamNames)=> this.setState(()=> (
            {teamNames}
        )))
    }

    render() {
        const {teamNames} = this.state;
        return(
            <div className='container'>
            <h3 className='large-header'>
            React Router Basketball League </h3>
            <h5 className='header text-center'>
            Select a Team to Explore
            </h5>
            <div className='home-grid'>
            {teamNames.map((id) => (
                <Link key={id} to= {`/${id}`} > 
                <TeamLogo id={id} width='120px'/>
                </Link>
            ))}
            </div>
            </div>
        )
    }
}