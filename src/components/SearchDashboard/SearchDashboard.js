import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import ProductCard from '../Product/Product'
import Divider from '@material-ui/core/Divider';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import useStyles from './SearchDashboardStyles';

const SearchDashboard = ({
  products,
  totalPages,
  showShop,
  onAddShopcart,
  onChangePage
}) => {
  const classes = useStyles();

  const productCards = products.map((product, index) => {
    return (
      <Fragment key={`${product.id}:${index}`}>
        <ProductCard
          product={product}
          showShop={showShop}
          onAddShopcart={onAddShopcart}
        />
        {index !== (products.length - 1) &&
          <Divider variant="middle" className={classes.divider} />
        }
      </Fragment>
    )
  })

  // When no products show empty message
  const empty = (
    <div className={classes.empty}>
      <Typography variant="h5" className={classes.emptyMessage}>
        No products found
      </Typography>
    </div>
  )

  return (
    <div className={classes.content}>
      {productCards.length !== 0
        ?
        <Fragment>
          <div className={classes.list}>
            {productCards}
          </div>
          <div className={classes.pagination}>
            <Pagination count={totalPages} size="large" onChange={onChangePage}/>
          </div>
        </Fragment>
        :
        empty
      }
    </div>
  );
}

SearchDashboard.propTypes = {
  products: PropTypes.array,
  totalPages: PropTypes.number,
  showShop: PropTypes.bool,
  onAddShopcart: PropTypes.func,
  onChangePage: PropTypes.func,
};

export default SearchDashboard;
