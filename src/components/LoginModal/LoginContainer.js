import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import * as authActions from '../../redux/auth/authAction'
import Login from './Login'

class LoginContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPassword: false
    };
  }

  handleLogin = (e) => {
    e.preventDefault()
    const { onClose, login } = this.props
    const email = e.currentTarget.email.value
    const pass = e.currentTarget.password.value

    login(email, pass)
      .then(() => {
        onClose()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleShowPassword = () => {
    const { showPassword } = this.state
    this.setState({
      showPassword: !showPassword
    })
  }
  
  render() {
    const { open, onClose, auth } = this.props
    const { showPassword } = this.state

    return (
      <Login
        open={open} 
        onClose={onClose}
        onLogin={this.handleLogin}
        showPassword={showPassword}
        onShowHidePassword={this.handleShowPassword}
        loading={auth.loading}
      />
    )
  }
}

LoginContainer.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  auth: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...authActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)