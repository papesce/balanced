import React from "react"
import Nav from "./Nav"

class Header extends React.Component {
  render(){
    return <Nav {...this.props} />
  }

}


export default Header