import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import useStyles from './HeaderStyles';

const Header = ({ onSearch, onOpenLogin, username }) => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
        <Link to='/' className={classes.link}>
          <Typography className={classes.title} variant="h6" noWrap>
            Marketplace
          </Typography>
        </Link>
          <form onSubmit={onSearch}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                name="search"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </form>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {username ?
              <Fragment>
                <Typography className={classes.username} noWrap>
                  {username}
                </Typography>
                <Link to='/user/shopcart' className={classes.link}>
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <ShoppingCart />
                  </IconButton>
                </Link>
              </Fragment>
              :
              <Button color="inherit" onClick={onOpenLogin}>Login</Button>
            }
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  onSearch: PropTypes.func,
  onOpenLogin: PropTypes.func,
  username: PropTypes.string
}

export default Header;
