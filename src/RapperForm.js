import React, {Component} from 'react'

class RapperForm extends Component {

  state = {
    name: '',
    happyImage: '',
    sadImage: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    // console.log(this.state)
}







  render(){
    return(
      <div>
      <form onSubmit={(event) => {this.props.handleSubmit(event, this.state)}}>
        <label>Rapper Name</label>
        <input name="name" type='textfield' onChange={this.handleChange} value={this.state.name}></input>
        <label>Happy Image</label>
        <input name="happyImage" type='textfield' onChange={this.handleChange} value={this.state.happyImage}></input>
        <label>Sad Image</label>
        <input name="sadImage"type='textfield' onChange={this.handleChange} value={this.state.sadImage}></input>
        <input type='submit'/>
      </form>
      </div>
    )
  }


}

export default RapperForm
