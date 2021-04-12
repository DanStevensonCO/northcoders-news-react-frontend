import React, { Component } from 'react';
import { patchVote } from '../utils/api';
import { MuiThemeProvider, Fab, createMuiTheme } from '@material-ui/core'

class VotesComponent extends Component {
    state = {
        voteChange: 0,
    }

    toggleVotes = (contentType, id, inc) => {        
        this.setState((currState) => {
            return {
                voteChange: currState.voteChange + inc
            }
        })

        patchVote(contentType, id, inc)
    }

    
    render() {
        const theme = createMuiTheme({
            palette: {
                primary: { main: '#009639' }, // green
                secondary: { main: '#d4351c' }, // red
            },
        });

        const { contentType, id, votes, currentUser } = this.props
        const { voteChange } = this.state

        return (
             <MuiThemeProvider theme={theme}>
                <div className="toggle-votes">
                    <Fab color='primary' size="small" hidden={ currentUser } onClick={() => this.toggleVotes(contentType, id, 1) }>+</Fab>
                    <h3 className="votes-count">{votes + voteChange}</h3>
                    <Fab color='secondary' size="small" hidden={ currentUser } onClick={() => this.toggleVotes(contentType, id, -1) }>-</Fab>
                </div>
             </MuiThemeProvider>
        );
    }
}

export default VotesComponent;