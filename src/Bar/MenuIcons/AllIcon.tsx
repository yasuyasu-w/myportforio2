import React from 'react'
import  HomepageIcon from './HomePageIcon'
import  ProfileIcon from './ProfileIcon'
import  ProductIcon from './ProductIcon'
import  SkillsIcon from './SkillsIcon'
import  ContactIcon from './ContactIcon'
import {useHistory} from 'react-router-dom'
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
          justWidth:{
             width:'auto'
          },
          iconFont:{
            '&:hover':{
                opacity: 0.5
            }
          }
  }),
);



const AllIcon=(props)=>{
    const classes = useStyles();
    const history=useHistory()

    const PushAndClose=(e,path:string)=>{
        if(props.handleDrawerClose){
            props.handleDrawerClose(e)
        }
        history.push(path)
      }

       return( 
       <>
         <HomepageIcon PushAndClose={PushAndClose} hideIcon={props.hideIcon} justWidth={classes.justWidth} 
                       iconFont={classes.iconFont}  />
          <ProfileIcon PushAndClose={PushAndClose} hideIcon={props.hideIcon} justWidth={classes.justWidth} 
                       iconFont={classes.iconFont}  />
          <SkillsIcon PushAndClose={PushAndClose} hideIcon={props.hideIcon} justWidth={classes.justWidth} 
                       iconFont={classes.iconFont}  />
          <ProductIcon PushAndClose={PushAndClose} hideIcon={props.hideIcon} justWidth={classes.justWidth} 
                       iconFont={classes.iconFont}  />
          <ContactIcon PushAndClose={PushAndClose} hideIcon={props.hideIcon} justWidth={classes.justWidth} 
                       iconFont={classes.iconFont}  />
      </> 
       ) 
}

export default AllIcon

