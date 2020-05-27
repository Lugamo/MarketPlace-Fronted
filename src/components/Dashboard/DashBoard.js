import React from 'react';
import PropTypes from 'prop-types'
import CategoryCard from './Category'
import useStyles from './DashboardStyles';

const Dashboard = ({ onCategory }) => {
  const classes = useStyles();

  const categories = [
    { name: 'Electronics', image: 'https://article.images.consumerreports.org/f_auto/prod/content/dam/CRO%20Images%202019/Electronics/11November/CR-Electronics-Inlinehero-cyber-monday-electronic-deals-1119' },
    { name: 'Videogames', image: 'https://martestecnologico.com/wp-content/uploads/sites/8/2020/04/videogames.jpg' },
    { name: 'Books', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrynyHI3Bz53b10lD2Lb0sUcmQ4LaoONbxNJjpdB82hqNvpCuA&usqp=CAU' },
    { name: 'Toys', image: 'https://internetofbusiness.com/wp-content/uploads/2017/11/toys-2165123_640-1280x720.jpg' }
  ]

  // For each category load c category component
  const categoriesCards = categories.map((category) => {
    return (
      <CategoryCard
        key={category.name}
        categoryName={category.name}
        categoryImage={category.image}
        onCategory={onCategory}
      />
    )
  })

  return (
    <div className={classes.content}>
      <img
        src={'https://farscapedevelopment.co.uk/wordpress/wp-content/uploads/banner-coaching-1280.jpg'}
        alt={'sale up to 80%'}
        className={classes.imageBanner}
      />
      <div className={classes.cardContainer}>
        {categoriesCards}
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  onCategory: PropTypes.func
};

export default Dashboard;
