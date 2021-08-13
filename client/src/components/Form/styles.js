import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  paper: {
    height: "447px",
    width: "551px",    
    borderRadius: "25px",
    background: "#494949",    
  },
  form: {    
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",    
    marginLeft: "26px",   
    marginRight: "28px", 
    outline: "none",   
  },  
  box: {
    display: "flex",
    justifyContent: "left",
    marginTop: "24px",
    marginLeft: "19px",
    marginBottom: "8.96px",
    marginRight: "28px",      
  },
  paperHeader: {
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "28px",
    color: "#CACACA",    
  }, 
  borderBox: {
    borderTop: "1.02px dashed #7B7C81",
    marginBottom: "5.04px",
  },
  inputWrapper: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "26px",
  },
  typographyWrapper: {
    display: "flex",
    alignItems: "center",  
  },
  typography: {
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "21px",
    color: "#C9C9C9", 
  },
  inputfield: {
    width: "226px",
    height: "28px",
    borderRadius: "5px",
    boxSizing: "border-box",
    color: "#CACACA",
    fontSize: "14px",
    fontWeight: "300",
    fontStyle: "light",
    paddingLeft: "6px",
    backgroundColor: "#494949",
    border: "1px solid #BFC4C8",  
    '&:active': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    }  
  },
  permission: {
    backgroundColor: "#BFC4C8",
    color: "#494949",
  },
  buttonBox: {   
    display: "flex",
    justifyContent: "center", 
    alignItems: "center",
    marginTop: "44px",
  },
  buttonSubmit: {
    width: "224.18px",
    height: "38.13px",
    radius: "5px",
    background: "linear-gradient(250.44deg, rgba(251, 107, 3, 0.8) 0.76%, rgba(255, 139, 55, 0.8) 121.19%)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",    
    color: "#FFFFFF",
    fontSize: "18px",
  }
}));