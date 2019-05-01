import React, { Component } from 'react';
import './App.css';


import RapperContainer from "./RapperContainer.js"
import RapperForm from "./RapperForm.js"

class App extends Component {

  state = {
    rappers: [],
    filteredRappers: []
  }

  handleChange = (event) => {
    // console.log(event.target.value)
    let newArray = [...this.state.rappers]
    let filter = newArray.filter(rapper => {
      return rapper.name.toLowerCase().includes(event.target.value.toLowerCase())
      // console.log(rapper.name)
      console.log(event.target.value)
    })
    this.setState({
      filteredRappers: filter
    })

    //if rapper name includes the value, then keep it in the list
  }

  componentDidMount(){
    fetch("http://localhost:3005/rappers")
    .then(response => response.json())
    .then(rappers => {
      this.setState({
        rappers: rappers,
        filteredRappers: rappers
      })
    })
  }


  handleSubmit = (event, rapperObj) => {
    event.preventDefault()
    let newArray = [rapperObj, ...this.state.rappers]
    console.log(newArray)
    this.setState({
      rappers: newArray,
      filteredRappers: newArray
    })
  }





  render(){

    return (
      <div>
        <RapperForm handleSubmit={this.handleSubmit}/>
        <RapperContainer handleChange={this.handleChange} rappers={this.state.filteredRappers} />
      </div>
    )
  }
}



export default App;
