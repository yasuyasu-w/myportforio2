import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles,createStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
        width:'100%',
        padding: '0 5%'
       
    },
    title:{
        fontFamily:'Shadows Into Light,cursive',
        textAlign:'center'
    },
    abator:{
        width:'200px',
        height:'200px',
        marginTop:'80px',
        marginLeft:'auto',
        marginRight:'auto'
        
    },
    ProfileView:{
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        flexWrap: 'wrap'
    },
    li:{
        marginBottom:'15px'
    }
  }),
);

export default function Profile(){
    const classes = useStyles();
    return(
        <>
        <Typography variant='h3' className={classes.title} >Profile</Typography>
        <div className={classes.root}>
        <div className={classes.ProfileView} >
        <Avatar alt="Remy Sharp" src="" className={classes.abator} />
        <ul style={{marginTop:50,fontSize:20,maxWidth: '600px'}}>
            <li className={classes.li}>名前 : 渡邉 靖紋</li>
            <li className={classes.li}>出身 : 福岡県(熊本在住)</li>
            <li className={classes.li}>学歴 : 熊本県立大学 総合管理学部 4年</li>
            <li className={classes.li}>趣味 : 音楽を聴くこと ジャンルはhiphopやreggae,R&Bなど....</li>
            <li className={classes.li}>一言 : 現在はフロントエンドエンジニアを目指して日々学習しています。将来的には、バックエンドやデザイン含め、フルスタックで活躍していきたいです!</li>
        </ul>
        </div>
        </div>
        </>
    )
}