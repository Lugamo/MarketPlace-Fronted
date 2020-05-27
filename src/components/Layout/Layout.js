import React, { Component } from 'react'
import Header from '../Header/HeaderContainer'

class Layout extends Component {

  // Remove margins of the body
  componentDidMount() {
    document.body.style.margin="0"
  }

  componentWillUnmount() {
    document.body.style.margin="8px"
  }

  render() {
    return(
      <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <Header />
        { this.props.children }
      </div>
    );
  }
}

export default Layout;
