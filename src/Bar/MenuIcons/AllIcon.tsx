import React from 'react'
import  HomepageIcon from './HomePageIcon'
import  ProfileIcon from './ProfileIcon'
import  ProductIcon from './ProductIcon'
import  SkillsIcon from './SkillsIcon'
import  ContactIcon from './ContactIcon'
import {useHistory} from 'react-router-dom'




const AllIcon=(props)=>{
    const history=useHistory()

    const PushAndClose=(path:string)=>{
        if(props.handleDrawerClose){
            props.handleDrawerClose()
        }
        history.push(path)
      }

       return( 
       <>
         <HomepageIcon PushAndClose={PushAndClose} hideIcon={props.hideIcon}  />
          <ProfileIcon PushAndClose={PushAndClose} hideIcon={props.hideIcon}  />
          <SkillsIcon PushAndClose={PushAndClose} hideIcon={props.hideIcon}  />
          <ProductIcon PushAndClose={PushAndClose} hideIcon={props.hideIcon}  />
          <ContactIcon PushAndClose={PushAndClose} hideIcon={props.hideIcon}  />
      </> 
       ) 
}

export default AllIcon

