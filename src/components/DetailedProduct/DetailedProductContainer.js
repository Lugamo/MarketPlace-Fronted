import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { withSnackbar } from 'notistack';
import PropTypes from 'prop-types'
import * as productsActions from '../../redux/product/productAction'
import * as shopcartActions from '../../redux/shopcart/shopcartAction'
import DetailedProduct from './DetailedProduct'
import Layout from '../Layout/Layout'
import Loading from '../loading/loading'

class DetailedProductContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }

  componentDidMount() {
    const { getDetailedProduct, location } = this.props

    // get product id in the url
    const arrayPath = location.pathname.split('/')
    const productId = arrayPath[arrayPath.length - 1]

    getDetailedProduct(productId)
  }

  handleAddShopcart = (productId) => {
    const { addProduct } = this.props
    
    addProduct(productId)
    .then(() => this.props.enqueueSnackbar('Product added to shopcart.'))
    .catch(() => this.props.enqueueSnackbar('Product could not be added'))
  }
  
  render() {
    const { products, auth } = this.props;
    let loading

    if (products.loading) {
      loading = <Loading />
    }

    return (
      <Layout>
        <DetailedProduct
          productDetailed={products.detailedProduct}
          addShopcart={this.handleAddShopcart}
          disableShopcart={auth.token === null}
        />
        {loading}
      </Layout>
    )
  }
}

DetailedProductContainer.propTypes = {
  products: PropTypes.object,
  auth: PropTypes.object
};

const mapStateToProps = state => ({
  products: state.products,
  auth: state.auth
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...productsActions, ...shopcartActions }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withSnackbar(DetailedProductContainer)))
