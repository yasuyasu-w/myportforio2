import React,{useEffect} from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, /*useTheme,*/ Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

//import {HomepageIcon,ProfileIcon,SkillsIcon,ProductIcon,ContactIcon} from './MenuIcons/index'
import AllIcon from './MenuIcons/AllIcon'

//import {useHistory} from 'react-router-dom'

const drawerWidthcopy = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidthcopy,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      '@media (min-width: 1000px)': {
        display: 'none'
      }
    },
    drawerOpen: {
      width: drawerWidthcopy,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: theme.spacing(0, 1),
      fontSize:20,
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    }
  }),
);


const Drawers=({open,setOpen})=>{
  const classes = useStyles()
  //const history=useHistory()

  const handleDrawerClose = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
  }
       setOpen(false);
     };


     useEffect(() => {
      const intervalId = setInterval(() => {
       const nowWidth=window.innerWidth
       if(nowWidth>1000){
         setOpen(false)}
      }, 3000);
      return () => {
        clearInterval(intervalId);
      };
    },[setOpen]);


    return(
        <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
          open={open}
        onClose={e=>handleDrawerClose(e)}
      >
        <div className={classes.toolbar}>
        <div>MENU</div>
          <IconButton onClick={e=>handleDrawerClose(e)}>
            {//theme.direction === 'rtl' ? <ChevronRightIcon /> : 
            <ChevronLeftIcon />
            }
          </IconButton>
        </div>
        <Divider />
          <List>
          <AllIcon handleDrawerClose={handleDrawerClose} />
        </List>
          </Drawer> 
    )
}

export default Drawers