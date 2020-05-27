import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '15%',
      paddingRight: '15%',
    },
  },
  list: {
    marginTop: theme.spacing(5),
    backgroundColor: 'white'
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(4),
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  empty: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(5)
  },
  emptyMessage: {
    fontSize: '7vw',
    color: theme.palette.grey[500],
  }
}));

export default useStyles