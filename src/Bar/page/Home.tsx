import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import HomepageImg from './img/musichomepage0.jpg'
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'




const useStyles = makeStyles({
    root: {
        width:'100%',
        height:'100vh',
        position: 'relative'
  //      textAlign:'center'
        },
    homeContents:{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -25%)',
      textAlign: 'center',
    },
    main:{
       fontFamily:'Shadows Into Light,cursive',
       color:'white'
    },
    button:{
      background:'#FFB952',
      marginTop: '3rem'
    },
    img:{
      objectFit: 'cover',
      height: '100%',
      width: '100%',
    }
  });

  export default function Home(){
    const classes = useStyles();
    const history=useHistory()
    
    return(
      <>
        <div className={classes.root}>
        <div className={classes.homeContents} > 
        <Typography variant="h3" gutterBottom className={classes.main} >
        Welcome to<br/>
        My  Portforio！
        </Typography>
        <Button fullWidth className={classes.button} 
                onClick={()=>history.push("/profile")}
                size='large' >
          About Me
        </Button>
        </div>
        <img src={HomepageImg} alt='music homepage' className={classes.img} />
        </div>
      </>  
    )
  }