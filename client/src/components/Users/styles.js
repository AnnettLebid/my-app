import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
  },  
  boxContainer: {
    marginTop: "40px",
    marginBottom: "50px",
    display: "flex",
    justifyContent: "space-between",
  }
}));