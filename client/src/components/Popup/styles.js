import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  wrapper: {     
    width: "394px",
    height: "165px",
    borderRadius: "25px",    
    backgroundColor: " #494949",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    padding: "9px",
    position: "fixed",
    top: "50%",
    left: "50%", 
    transform: "translate(-50%, -50%)",
    zIndex: "10",

  },
  closeButton: {
    display: "flex",
    flexDirection: "row-reverse",
    marginRight: "11px",
  },
  popupTextWrapper: {
    textAlign: "center",
  },
   popupText: {
    fontSize: "18px", 
    fontWeight: "500",
    color: "#C9C9C9",
    marginTop: "15px",
    marginBottom: "36px",
    alignContent: "center",
  },
  buttonsWrapper: {
     display: "flex",
     justifyContent: "space-between",
     margin: "0 83px 0",
  },
  submitButton: {
    width: "91px",
    height: "38px",
    background: "linear-gradient(250.44deg, rgba(251, 107, 3, 0.8) 0.76%, rgba(255, 139, 55, 0.8) 121.19%)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
    color: "#FFFFFF",
    fontSize: "18px",
    cursor: "pointer",
    border: "none",
  }
}));