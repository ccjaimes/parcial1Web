import React, { Component } from 'react';

class Trend extends Component {
    state={
        hashtag:this.props.value.hashtag,
        retweets:this.props.value.teweets
    }
    render() {
        return (
            <div class="card">
                <div class="card-body">
                    <h4>Tendencia ahora</h4>
                    <h3>#{this.state.hashtag}</h3>
                    <p>{this.state.retweets} retweets</p>
                </div>
            </div>
        );
    }
}

export default Trend;