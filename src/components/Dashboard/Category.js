import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './DashboardStyles';

const Category = ({ categoryName, categoryImage, onCategory }) => {
  const classes = useStyles();
  const handleCategory = () => {
    onCategory(categoryName)
  }

  return (
    <Link to="/products" className={classes.link}>
      <Card className={classes.cardRoot} key={categoryName}>
        <CardActionArea onClick={handleCategory}>
          <CardMedia
            className={classes.cardMedia}
            image={categoryImage}
            title={categoryName}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {categoryName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}

Category.propTypes = {
  categoryName: PropTypes.string,
  categoryImage: PropTypes.string,
  onCategory: PropTypes.func
};

export default Category;
