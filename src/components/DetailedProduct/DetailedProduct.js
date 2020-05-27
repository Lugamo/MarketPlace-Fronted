import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import useStyles from './DetailedProductStyles';

const DetailedProduct = ({
  productDetailed,
  addShopcart,
  error,
  disableShopcart
}) => {
  const classes = useStyles();

  const handleShopcart = () => {
    addShopcart(productDetailed.id)
  }

  const renderProduct = (
    <Fragment>
      <div className={classes.imageDescContainer}>
        <img
          src={productDetailed.image}
          alt={productDetailed.name}
          className={classes.image}
        />
        <div className={classes.description}>
          <Typography variant="h4">
            Description
          </Typography>
          <Typography variant="body1">
            {productDetailed.description}
          </Typography>
        </div>
      </div>
      <div className={classes.detail}>
        <Typography variant="h3">
          {productDetailed.name}
        </Typography>
        <Typography variant="h4" color="textSecondary">
          {`$${productDetailed.price}`}
        </Typography>
        <Rating name="read-only" value={productDetailed.rating || 0} readOnly />
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.btn}
          disabled={disableShopcart}
          onClick={handleShopcart}
        >
          Add to shopcart
        </Button>
      </div>
    </Fragment>
  )

  const errorMessage = (
    <div className={classes.error}>
      <Typography variant="h5" className={classes.errorMessage}>
        There was a problem getting the product
      </Typography>
    </div>
  )

  return (
    <div className={classes.container}>
      {error
        ?
        errorMessage
        :
        renderProduct
      }
    </div>
  );
}

DetailedProduct.propTypes = {
  productDetailed: PropTypes.object,
  addShopcart: PropTypes.func,
  error: PropTypes.string,
  disableShopcart: PropTypes.bool
};

export default DetailedProduct;
