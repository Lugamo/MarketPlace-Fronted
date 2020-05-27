import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import ProductCard from '../Product/Product'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import useStyles from './ShopcartStyles';

const Shopcart = ({
  shopcart,
  onRemoveShopcart
}) => {
  const classes = useStyles();

  const productCards = shopcart.map((item, index) => {
    return (
      <Fragment key={`${item.id}:${index}`}>
        <ProductCard
          product={item}
          showRemove={true}
          onRemove={onRemoveShopcart}
        />
        {index !== (shopcart.length - 1) &&
          <Divider variant="middle" className={classes.divider} />
        }
      </Fragment>
    )
  })

  // Show empty shopcart message when no products
  const empty = (
    <div className={classes.empty}>
      <Typography variant="h5" className={classes.emptyMessage}>
        Empty Shopcart
      </Typography>
    </div>
  )

  return (
    <div className={classes.content}>
      {productCards.length !== 0
        ?
        <div className={classes.list}>
          {productCards}
        </div>
        :
        empty
      }
    </div>
  );
}

Shopcart.propTypes = {
  shopcart: PropTypes.array,
  onRemoveShopcart: PropTypes.func
};

export default Shopcart;
