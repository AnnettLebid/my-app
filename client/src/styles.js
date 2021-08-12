import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  mainContainer: {    
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",    
    marginLeft: "96px",   
  },  
  boxContainer: {
    marginTop: "40px",
    marginBottom: "50px",
    display: "flex",
    justifyContent: "space-between",
  }
}));