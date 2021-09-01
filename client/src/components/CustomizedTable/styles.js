import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  table: {     
    minWidth: '1728px',
    height: '764px',
    background: '#494949',
    borderRadius: '4px',
    paddingLeft: '115px',
    paddingRight: '150px',   
  }, 
  FullNameHeader: {
    paddingLeft: '120px',
  },
  fullNameCell: {
    display: 'flex',
    justifyContent: 'left',
    marginLeft: '100px',
    alignItems: 'flexEnd',
  },  
  avatar: {
    width: '34px',
    height: '34px',
    marginRight: '22px',
  }, 
  location: {
    marginRight: "9px",
    display: "inline-flex",
  }
}));