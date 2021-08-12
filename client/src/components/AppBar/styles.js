import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBarContainer: {
    display: 'flex',
    height: '72px',
    background: 'linear-gradient(0deg, #000000, #000000)',
    color: '#FFFFFF',  
  },
  sideBar: {
    width: '300px',
    background: 'linear-gradient(90deg, #FB6B03 0.43%, #211711 20.43%, #111E26 100%, #000000 100%)',
    display: 'flex',    
    alignItems: 'center',  
  },
  sideBarLogo: {
    marginLeft: '40px',
    display: 'flex',
    alignItems: 'center',    
  },
  sideBarText: {
    fontWeight: '700',
    fontSize: '36px', 
    marginLeft: '26px'
  }, 
  topBar: {
    marginLeft: '33px',
    display: 'flex',
    alignItems: 'center',   
  },
  topBarText: {
    fontWeight: '300',
    fontSize: '36px',     
  }
}));