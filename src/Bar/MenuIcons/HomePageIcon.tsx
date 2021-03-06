import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';




const HomePageIcon=(props)=>{

    return (
        <ListItem button key={'HOME'} onClick={(e)=>props.PushAndClose(e,'/')}
                  className={props.justWidth} >
              <ListItemIcon className={props.hideIcon ? props.hideIcon:''} >
                  <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='HOME' className={props.iconFont} />
        </ListItem>
    )
}

export default HomePageIcon