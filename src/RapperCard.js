import React, { Component } from 'react'




class RapperCard extends Component {
  //When writing state
  //We need initial state

  state = {
    clicked: false
  }


  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }



  render(){

    let imgSrc = this.state.clicked ? this.props.rapper.happyImage : this.props.rapper.sadImage

    return(
        <div>
            <h1>{this.props.rapper.name}</h1>
            <img src={imgSrc} onClick={this.handleClick}></img>
        </div>
    )
}


}



export default RapperCard
