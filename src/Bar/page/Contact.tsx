import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles(() =>
  createStyles({
    title: {
        fontFamily:'Shadows Into Light,cursive',
        textAlign:'center',
    },
    main:{
        display:'flex',
        justifyContent:'space-around',
        margin: '5% 0'
    },
    iconFont:{
        display:'flex',
        flexDirection:"column",
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
        fontSize:70,
        '&:hover':{
            color: '#FFB952'
        }
    }
  }),
);

export default function Contact(){
    const classes = useStyles();

    return(
        <>
        <div className={classes.title} >
        <Typography className={classes.title} variant='h3'>Contact</Typography>
        <p>問い合わせ等はメールにてご連絡ください。</p>
        </div>
        <div className={classes.main} >
            <div className={classes.iconFont} >
            <a href='mailto:ya.su.ya.su.w0612@outlook.jp' >
                <MailIcon className={classes.icon} color='disabled' />
            </a>
            <p><b>Mail</b></p>
            </div>
            <div className={classes.iconFont} >
            <a href='https://github.com/yasuyasu-w' target="_blank" rel="noopener noreferrer" >
                <GitHubIcon className={classes.icon} color='disabled' />
            </a>
            <p><b>Github</b></p>
            </div>
        </div>
        </>
    )
}