import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withSnackbar } from 'notistack';
import PropTypes from 'prop-types'
import * as shopcartActions from '../../redux/shopcart/shopcartAction'
import Layout from '../Layout/Layout'
import Loading from '../loading/loading'
import Shopcart from './Shopcart'

class ShopcartContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }

  componentDidMount() {
    const { getShopcart } = this.props
    getShopcart()
  }

  handleRemoveShopcart = (productId) => {
    const { removeProduct } = this.props
    
    removeProduct(productId)
    .catch(() => this.props.enqueueSnackbar('Product could not be removed'))
  }
  
  render() {
    const { shopcart } = this.props
    let loading

    if (shopcart.loading) {
      loading = <Loading />
    }

    return (
      <Layout>
        <Shopcart
          shopcart={shopcart.shopcart}
          onRemoveShopcart={this.handleRemoveShopcart}
        />
        {loading}
      </Layout>
    )
  }
}

ShopcartContainer.propTypes = {
  shopcart: PropTypes.object
};

const mapStateToProps = state => ({
  shopcart: state.shopcart
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...shopcartActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(ShopcartContainer))
