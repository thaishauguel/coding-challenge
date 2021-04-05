import React, { Component } from 'react'

export default class CustomiseImage extends Component {
    state={
        size:"",
        url:""
    }

    handleChange=(event)=>{
this.setState({[event.target.name]: event.target.value})
    }
    render() {
        return (
            <div>
                <h1>Customize Image</h1>
                <div>
                <input onChange={this.handleChange} style={{width : 250, height: 30, borderRadius: 5, border:"1px solid lightGrey"}} type="text" name="url" placeholder="Enter the address of your image"/>
                </div>
                <div>
                <input onChange={this.handleChange} type="range" name="size" min="0" max="200"/>
                </div>
                {this.state.size && <p>{this.state.size}x {this.state.size}px</p>}
                <img style={{width: `${this.state.size}px`}} src={this.state.url} alt=""/>

            </div>
        )
    }
}
