import React, { Component } from 'react';

class Menu extends Component {
    state = {
        image:this.props.value.image,
        text:this.props.value.text
    }
    render() {
        return (
            <div class="row">
                <div class="col-2">
                    <img src={this.state.image} style={{height:"20px"}} alt="ejem"></img>
                </div>
                <div class="col-10">
                    <p>{this.state.text}</p>
                </div>
            </div>
        );
    }
}

export default Menu;