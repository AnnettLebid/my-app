import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  searchInput: {     
    width: "707px",
    height: "53px",
    borderRadius: "0px",
    border: "4px solid rgba(112, 112, 112, 0.53)",
    padding: "17px",
    backgroundColor: "#545454",
    fontSize: "24px",    
    color: "#FFFFFF",
    outlined: "none",
    boxSizing: "border-box",
    '&:active': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    }  
  },  

}));