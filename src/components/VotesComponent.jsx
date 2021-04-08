import React, { Component } from 'react';
import { patchVote } from '../utils/api';

class VotesComponent extends Component {
    state = {
        voteChange: 0,
    }

    toggleVotes = (contentType, id, inc) => {
        console.log(contentType, id, inc)
        
        this.setState((currState) => {
            return {
                voteChange: currState.voteChange + inc
            }
        })

        patchVote(contentType, id, inc)
    }
    
    render() {
        const { contentType, id, votes } = this.props
        const {voteChange} = this.state

        return (
            <div className="toggle-votes">
                <button onClick={() => this.toggleVotes(contentType, id, 1) }>+</button>
                <h3>{votes + voteChange}</h3>
                <button onClick={() => this.toggleVotes(contentType, id, -1) }>-</button>
            </div>
        );
    }
}

export default VotesComponent;