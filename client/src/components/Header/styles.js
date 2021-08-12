import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  heroContainer: {     
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",   
    padding: "5rem 0",
    marginTop: "26px",
    marginBottom: "4rem",
  },  
  heroWrapper: {
    marginTop: "26px"
  },
  hero: {
    fontWeight: 500,  
    fontSize: '26px',
    lineHeight: '39px', 
    color: '#FFFFFF',   
  }, 
}));