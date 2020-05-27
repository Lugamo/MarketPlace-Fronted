import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    [theme.breakpoints.down('md')]: {
      backgroundColor: 'white',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(5),
      paddingLeft: '15%',
      paddingRight: '15%',
    }
  },
  imageDescContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    [theme.breakpoints.up('lg')]: {
      maxWidth: 500
    },
    border: '1px solid rgba(0,0,0,0.2)'
  },
  image: {
  },
  description: {
    padding: theme.spacing(2),
  },
  detail: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
      borderTop: '1px solid rgba(0,0,0,0.2)',
      borderRight: '1px solid rgba(0,0,0,0.2)',
      borderBottom: '1px solid rgba(0,0,0,0.2)',
      minWidth: 325
    },
  },
  btn: {
    marginTop: 'auto',
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(15)
    },
  },
  error: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(5)
  },
  errorMessage: {
    fontSize: '7vw',
    color: theme.palette.grey[500],
  }
}));

export default useStyles