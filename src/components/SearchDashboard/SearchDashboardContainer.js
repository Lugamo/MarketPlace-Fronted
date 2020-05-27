import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withSnackbar } from 'notistack';
import PropTypes from 'prop-types'
import * as productsActions from '../../redux/product/productAction'
import * as shopcartActions from '../../redux/shopcart/shopcartAction'
import Layout from '../Layout/Layout'
import Loading from '../loading/loading'
import SearchDashboard from './SearchDashboard'

class SearchDashboardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }

  handleChangePage = (e, page) => {
    const { pageChangeProducts } = this.props
    pageChangeProducts(page)
    .catch(() => this.props.enqueueSnackbar('Page could not be changed'));
  }

  handleAddShopcart = (productId) => {
    const { addProduct } = this.props
    
    addProduct(productId)
    .then(() => this.props.enqueueSnackbar('Product added to shopcart.'))
    .catch(() => this.props.enqueueSnackbar('Product could not be added'));
  }
  
  render() {
    const { products, auth } = this.props
    let loading

    if (products.loading) {
      loading = <Loading />
    }

    return (
      <Layout>
        <SearchDashboard
          products={products.products}
          totalPages={products.navigation.total}
          onChangePage={this.handleChangePage}
          showShop={auth.username !== null}
          onAddShopcart={this.handleAddShopcart}
        />
        {loading}
      </Layout>
    )
  }
}

SearchDashboardContainer.propTypes = {
  products: PropTypes.object
};

const mapStateToProps = state => ({
  products: state.products,
  auth: state.auth,
  shopcart: state.shopcart
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...productsActions, ...shopcartActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(SearchDashboardContainer))