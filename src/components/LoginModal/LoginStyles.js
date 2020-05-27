import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  content: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(8),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 350
  },
  passwordInput: {
    marginTop: theme.spacing(3)
  },
  submitBtn: {
    marginTop: theme.spacing(5),
    height: 50
  }
}));

export default useStyles