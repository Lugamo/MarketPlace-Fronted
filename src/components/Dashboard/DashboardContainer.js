import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withSnackbar } from 'notistack';
import PropTypes from 'prop-types'
import * as productsActions from '../../redux/product/productAction'
import Layout from '../Layout/Layout'
import Loading from '../loading/loading'
import Dashboard from './DashBoard'

class DashboardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }

  handleSearchByCategory = (categoryName) => {
    const { categoryProducts } = this.props
    categoryProducts(categoryName)
    .catch(() => this.props.enqueueSnackbar('There was a problem getting products by category'))
  }
  
  render() {
    const { products } = this.props
    let loading

    if (products.loading) {
      loading = <Loading />
    }

    return (
      <Layout>
        <Dashboard
          onCategory={this.handleSearchByCategory}
        />
        {loading}
      </Layout>
    )
  }
}

DashboardContainer.propTypes = {
  products: PropTypes.object
};

const mapStateToProps = state => ({
  products: state.products
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...productsActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(DashboardContainer))