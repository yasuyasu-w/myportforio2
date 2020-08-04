import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';

const ContactIcon=(props)=>{

    return (
        <ListItem button key={'お問い合わせ'} onClick={(e)=>props.PushAndClose(e,'/contact')}
                  className={props.justWidth} >
              <ListItemIcon className={props.hideIcon ? props.hideIcon:''} >
                  <MailIcon />
              </ListItemIcon>
              <ListItemText primary='コンタクト' className={props.iconFont} />
        </ListItem>
    )
}

export default ContactIcon