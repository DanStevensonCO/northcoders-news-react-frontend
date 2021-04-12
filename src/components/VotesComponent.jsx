import React, { Component } from 'react';
import { patchVote } from '../utils/api';
import { MuiThemeProvider, Fab, createMuiTheme } from '@material-ui/core'

class VotesComponent extends Component {
    state = {
        voteChange: 0,
    }

    toggleVotes = (contentType, id, inc) => {
        this.setState(((currState) => {
            // set the voteChange value to optimistically render to user
            return {
                voteChange: currState.voteChange + inc,
            }
        }), () => {
            // check if the vote change value is -1, 0 or 1
            // and enable/disable the relevant buttons in setState

            let upButtonDisabledBool
            let downButtonDisabledBool
            
            if (this.state.voteChange === -1) {
                upButtonDisabledBool = false
                downButtonDisabledBool = true
            }

            if (this.state.voteChange === 0) {
                upButtonDisabledBool = false
                downButtonDisabledBool = false
            }

            if (this.state.voteChange === 1) {
                upButtonDisabledBool = true
                downButtonDisabledBool = false
            }

            this.setState((currState) => {
                return {
                    upButtonDisabled: upButtonDisabledBool,
                    downButtonDisabled: downButtonDisabledBool,
                }
            })

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
        const { voteChange, upButtonDisabled, downButtonDisabled } = this.state

        return (
             <MuiThemeProvider theme={theme}>
                <div className="toggle-votes">
                    <Fab disabled={upButtonDisabled} color='primary' size="small" hidden={ currentUser } onClick={() => this.toggleVotes(contentType, id, 1) }>+</Fab>
                    <h3 className="votes-count">{votes + voteChange}</h3>
                    <Fab disabled={downButtonDisabled} color='secondary' size="small" hidden={ currentUser } onClick={() => this.toggleVotes(contentType, id, -1) }>-</Fab>
                </div>
             </MuiThemeProvider>
        );
    }
}

export default VotesComponent;