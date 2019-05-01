import React, { Component } from 'react'

class Search extends Component {





  render(){

    return (
      <div>
        <label>Search Rapper By Name</label>
        <input type="textfield" onChange={this.props.handleChange}></input>
      </div>
    )
  }






}

export default Search
