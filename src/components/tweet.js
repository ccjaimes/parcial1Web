import React, { Component } from 'react';

class Tweet extends Component {
    state = {
        avatar: this.props.value.avatar,
        firstName: this.props.value.first_name,
        lastName: this.props.value.last_name,
        nick: this.props.value.nick,
        date: Math.trunc((Math.abs(new Date() - new Date(this.props.value.date))/1000)/3600) + "h",
        content: this.props.value.content,
        retweets: parseInt(this.props.value.retweets),
        favs: parseInt(this.props.value.favs)
    }

    aumentarRt = (e) => {
        e.preventDefault();
        let est = this.state;
        est["retweets"]++;
        this.setState(est);
    }

    aumentarFav = (e) => {
        e.preventDefault();
        let est = this.state;
        est["favs"]++;
        this.setState(est);
    }

    render() {
        return (
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-1">
                            <img src={this.state.avatar} alt="pictw" />
                        </div>
                        <div class="col-10">
                            <h4>{this.state.firstName + " " + this.state.lastName + " " + this.state.nick + " " + this.state.date}</h4>
                            <p>{this.state.content}</p>
                            <button type="button" onClick={this.aumentarRt} class="btn btn-primary">{this.state.retweets} retweets</button>
                            <button type="button" onClick={this.aumentarFav} class="btn btn-primary">{this.state.favs} favs</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Tweet;