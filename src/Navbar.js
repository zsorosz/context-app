import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import styles from './styles/NavbarStyles';
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';

const content = {
    english: {
        search: "Search",
        flag: "ENG"
    },
    german: {
        search: "Suchen",
        flag: "DE"
    },
    hungarian: {
        search: "Keresés",
        flag: "HU"
    }
}

function Navbar(props){
    const { classes } = props;
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);
    const { search, flag } = content[language];

    return(
        <div className={classes.root}>
            <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit">
                        <div className={classes.flag}>{flag}</div>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" color="inherit">
                        App Title
                    </Typography>
                    <Switch onChange={toggleTheme} />
                    <div className={classes.grow}></div>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder={`${search}...`} classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }} />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

// class Navbar extends Component {
//     static contextType = ThemeContext;
//     render(){
//         const { classes } = this.props;
//         const { isDarkMode, toggleTheme } = this.context;
//         const { language } = this.props.languageContext;
//         const { search, flag } = content[language];

//         return(
//             <div className={classes.root}>
//                 <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
//                     <Toolbar>
//                         <IconButton className={classes.menuButton} color="inherit">
//                             <div className={classes.flag}>{flag}</div>
//                         </IconButton>
//                         <Typography className={classes.title} variant="h6" color="inherit">
//                             App Title
//                         </Typography>
//                         <Switch onChange={toggleTheme} />
//                         <div className={classes.grow}></div>
//                         <div className={classes.search}>
//                             <div className={classes.searchIcon}>
//                                 <SearchIcon />
//                             </div>
//                             <InputBase placeholder={`${search}...`} classes={{
//                                 root: classes.inputRoot,
//                                 input: classes.inputInput
//                             }} />
//                         </div>
//                     </Toolbar>
//                 </AppBar>
//             </div>
//         )
//     }
// }

export default withStyles(styles)(Navbar);