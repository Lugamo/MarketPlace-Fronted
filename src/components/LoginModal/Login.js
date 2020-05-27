import React from 'react';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './LoginStyles';

const Login = ({
  open,
  showPassword,
  loading,
  onClose,
  onLogin,
  onShowHidePassword
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
      >
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <DialogContent className={classes.content}>
          <form onSubmit={onLogin}>
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              required
              type="email"
              fullWidth 
            />
            <TextField
              label="Password"
              variant="outlined"
              name="password"
              required
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment:
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={onShowHidePassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
              }}
              fullWidth 
              className={classes.passwordInput}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submitBtn}
              disabled={loading}
            >
              Log In
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

Login.propTypes = {
  open: PropTypes.bool,
  showPassword: PropTypes.bool,
  loading: PropTypes.bool,
  onClose: PropTypes.func,
  onLogin: PropTypes.func,
  onShowHidePassword: PropTypes.func
}

export default Login;
