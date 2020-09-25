import React, { Component } from 'react'

export default class ColorPicker extends Component {

    constructor(props) {
        super();
        this.state = {
            colors: ["red", "green", "blue", "#ccc"]
        }
    }

    shownColor(color){
        return {
            background: color,
        }
    }

    render() {

        const elementColors = this.state.colors.map((color, index) => {
            return <span key={index}
                        onClick={ () => this.props.onReceiveColor(color) }
                        style={ this.shownColor(color) }
                        className={ this.props.color === color ? "active" : "" }
                   />
        });

        return (
            <div className="card border-primary">
                <div className="card-header bg-primary text-white">
                    Color Picker
                </div>
                <div className="card-body">
                    { elementColors }
                    <hr />
                </div>
            </div>
        );
    }
}
