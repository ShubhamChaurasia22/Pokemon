
import {AppBar, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    component: {
        background: '#0A285F',
        color: 'FEFFFF',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    text: {
        fontSize: 30,
        color: '#D5A100'
    }
    
})

const Header = ()=>{
    const classes = useStyles();
    return(
        <AppBar className={classes.component}>   
            <Typography className={classes.text}>PokeDesk</Typography>
        </AppBar>
    )
}

export default Header;