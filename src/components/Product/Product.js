import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import useStyles from './ProductStyles';

const Product = ({
  showShop,
  showRemove,
  product,
  onAddShopcart,
  onRemove
}) => {
  const classes = useStyles()

  // Add product to shopcart
  const handleShopcart = () => {
    onAddShopcart(product.id)
  }

  // Remove product from shopcart
  const handleRemove = () => {
    onRemove(product.id)
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={product.image}
        title="Live from space album cover"
      />
      <div className={classes.details}>
      <Link to={`/products/${product.id}`} className={classes.link}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {product.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {`$${product.price}`}
            </Typography>
          </CardContent>
      </Link>
      </div>
      {showShop &&
        <IconButton aria-label="shopcart" className={classes.shopCartButton} onClick={handleShopcart}>
            <AddShoppingCartIcon />
        </IconButton>
      }
      {showRemove &&
        <IconButton aria-label="shopcart" className={classes.shopCartButton} onClick={handleRemove}>
            <RemoveShoppingCartIcon />
        </IconButton>
      }
    </Card>
  );
}

Product.propTypes = {
  showShop: PropTypes.bool,
  showRemove: PropTypes.bool,
  product: PropTypes.object,
  onAddShopcart: PropTypes.func
}

Product.defaultProps = {
  showShop: false,
  showRemove: false
};

export default Product;
