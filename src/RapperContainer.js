//Steps to making a component


import React from 'react'
import RapperCard from './RapperCard.js'
import Search from './Search.js'

class RapperContainer extends React.Component {





  render(){
    return (
      <div>

        
        <Search handleChange={this.props.handleChange}/>


        {this.props.rappers.map(rapper => {
          return <RapperCard rapper={rapper} />
        })}



      </div>
    )
  }


}



export default RapperContainer
