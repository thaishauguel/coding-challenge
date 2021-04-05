import React, { Component } from 'react'

export default class Temperature extends Component {
    state={
        temperature: "",
        message:"", 
        color: "black"
    }

    handleChange=(event)=>{
        this.setState({temperature : event.target.value})
        if(event.target.value===""){this.setState({message:"", color:"black"})}
        else if (event.target.value<10){this.setState({message:"It's cold ❄️", color:"blue"})}
        else if (event.target.value>=10 && event.target.value<30){this.setState({message:"It's nice 🌼", color:"orange"})}
        else if (event.target.value>=30){this.setState({message:"It's warm ☀️", color: "red"})}
    }



    render() {
        return (
            <div>
                <h1>Temperature Page</h1>
                <input onChange={this.handleChange} style={{width : 250, height: 30, borderRadius: 5, border:"1px solid lightGrey"}} type="number" name="temperature" value={this.state.temperature} placeholder="Enter a temperature in celsius"/>
                <p style={{color : `${this.state.color}`}}>{this.state.message}</p>
            </div>
        )
    }
}
