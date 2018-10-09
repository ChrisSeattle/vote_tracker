import React from 'react';
import './vote_tracker.css';

class Votetracker extends React.Component {
    constructor(prop) {
        super(prop);

        this.state = {
            vote_limit: 10,
            vote: 0,
            polarity: 'neutral',
        }
        this.up_vote_count = this.up_vote_count.bind(this);
        this.down_vote_count = this.down_vote_count.bind(this);
        this.updateState = this.updateState.bind(this);
    }
        up_vote_count() {
            if(this.state.vote_limit > 0) {
                this.updateState(this.state.vote + 1, this.state.vote_limit - 1);
            }
        }

        down_vote_count() {
            if(this.state.vote_limit > 0) {
                this.updateState(this.state.vote - 1, this.state.vote_limit - 1);
            }
        }

        updateState(vote, vote_limit) {
            let polarity = null;
            if (vote > 0) {
                polarity = 'positive';
            }
            else {
                polarity = 'negative';
            }
            this.setState({ vote_limit, vote, polarity})
        }

        componentDidUpdate(){
            console.log('Votes: ', this.state.vote);
            console.log('Vote Limit: ', this.state.vote_limit);
        }
    

    render() {
        return (
            <main>
                <h2 className={this.state.polarity}> {this.state.vote} </h2>
                <span onClick={this.down_vote_count}> Down Vote </span>
                <span onClick={this.up_vote_count}> Up Vote </span>
                <h3> Votes Remaining: {this.state.vote_limit} </h3>
            </main>
            )
    }
}

export default Votetracker; 