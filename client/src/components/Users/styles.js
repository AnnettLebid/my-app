import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: '36px',
  },  
  boxContainer: {
    marginTop: "40px",
    marginBottom: "50px",
    display: "flex",
    justifyContent: "space-between",
  }
}));