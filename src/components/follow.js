import React, { Component } from 'react';

class Follow extends Component {
    state = {
        avatar: this.props.value.avatar,
        name: this.props.value.first_name + " " + this.props.value.last_name,
        nick: this.props.value.nick,
        follow: "Seguir"
    }

    seguir = (e) => {
        e.preventDefault();
        let estado = this.state;
        estado["follow"] = "Siguiendo!";
        this.setState(estado);
    }
    render() {
        return (
            <div class="row">
                <div class="col-2">
                    <img src={this.state.avatar} alt="picSg" />
                </div>
                <div class="col-7">
                    <h4>{this.state.name}</h4>
                    <p>{this.state.nick}</p>
                </div>
                <div class="col-3">
                    <button type="button" onClick={this.seguir} class="btn btn-info">{this.state.follow}</button>
                </div>
            </div>
        );
    }
}

export default Follow;