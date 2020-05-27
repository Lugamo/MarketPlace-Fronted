import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
  },
  imageBanner: {
    maxWidth: "100%",
    maxHeight: 340,
    minHeight: 200,
    marginBottom: theme.spacing(6),
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '10%',
      paddingRight: '10%',
    },
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '10%',
      paddingRight: '10%',
    },
  },
  cardRoot: {
    width: 200,
    [theme.breakpoints.up('sm')]: {
      width: 345,
    },
    marginBottom: 20
  },
  cardMedia: {
    height: 140,
  },
  link: {
    textDecoration: 'none'
  }
}));

export default useStyles