import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  button: {     
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100px',
    height: '29px',
    borderRadius: '5px',
    border: '2px solid rgba(112, 112, 112, 0.53)',  
    background: 'linear-gradient(250.44deg, rgba(251, 107, 3, 0.8) 0.76%, rgba(255, 139, 55, 0.8) 121.19%)',
    textAlign: 'center',
    paddingLeft: '4px',
    paddingRight: '4px',
    cursor: 'pointer',
    fontSize: '22px',
    fontWeight: '500',
    color: '#FFFFFF',
  },   
}));