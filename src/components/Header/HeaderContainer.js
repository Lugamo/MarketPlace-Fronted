import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom'
import { withSnackbar } from 'notistack';
import { bindActionCreators } from 'redux'
import * as productsActions from '../../redux/product/productAction'
import LoginModal from '../LoginModal/LoginContainer'
import Header from './Header'

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      openLogin: false
    };
  }

  handleSearch = (e) => {
    e.preventDefault()
    const { searchProducts } = this.props
    const searchValue = e.currentTarget.search.value

    // Dont search empty values
    if (searchValue !== '') {
      searchProducts(searchValue)
      .then(() => {
        this.setState({
          redirect: true
        })
      })
      .catch(() => this.props.enqueueSnackbar('There was a problem searching the products'))
    }
  }

  handleOpenLoginModal = () => {
    this.setState({
      openLogin: true
    })
  }

  handleCloseLoginModal = () => {
    this.setState({
      openLogin: false
    })
  }
  
  render() {
    const { redirect, openLogin } = this.state;
    const { auth, location } = this.props;
    
    // When a product is searched redirect to products page
    if (redirect && location.pathname !== '/products') {
      return <Redirect to='/products' />;
    }

    return (
      <Fragment>
        <Header
          onSearch={this.handleSearch}
          username={auth.username}
          onOpenLogin={this.handleOpenLoginModal}
        />
        <LoginModal 
          open={openLogin}
          onClose={this.handleCloseLoginModal}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products,
  auth: state.auth
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...productsActions }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withSnackbar(HeaderContainer)))
