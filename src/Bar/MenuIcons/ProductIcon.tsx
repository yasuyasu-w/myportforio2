import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';

const ProductIcon=(props)=>{

    return (
        <ListItem button key={'成果物'} onClick={(e)=>props.PushAndClose(e,'/product')}
                  className={props.justWidth} >
              <ListItemIcon className={props.hideIcon ? props.hideIcon:''} >
                  <LaptopChromebookIcon />
              </ListItemIcon>
              <ListItemText primary='成果物' className={props.iconFont} />
        </ListItem>
    )
}

export default ProductIcon