/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import ModeSwitch from '../ModeSwitch/ModeSwitch';
import theme from '../../utils/styleMethods';

const defaultProps = {
  label: "Where in the world?",
};

// const useStyles = makeStyles((theme1) => ({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme1.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//       display: 'none',
//       [theme1.breakpoints.up('sm')]: {
//         display: 'block',
//       },
//     },
//     color: '#202C37',
//   }));

const Header = ({ label }) => {
    // const classes = useStyles();
    const { darkTheme, lightTheme, parseTheme } = theme;
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
      if (darkMode) parseTheme(darkTheme);
      else parseTheme(lightTheme);
  }, [darkMode]);

    return (
      <header>
        
      <div className="header-container l-flex-reversed">
                <h1>{label}</h1>
                <ModeSwitch
                    classBlock="dark"
                    icon={`${darkMode ? "fas" : "far"} fa-moon`}
                    onToggle={() => setDarkMode(!darkMode)}
                    label="Dark Mode"
                />
            </div>
      </header>

        // <div className={classes.root} style={{ marginBottom: '100px'}}>
        //     <AppBar position='fixed'>
        //         <Toolbar>
        //             <IconButton
        //                 edge="start"
        //                 className={classes.menuButton}
        //                 color="inherit"
        //                 aria-label="open drawer"
        //             >
        //             </IconButton>
        //             <Typography className={classes.title} variant="h6" noWrap>
        //                 Countries
        //             </Typography>
        //         </Toolbar>
        //     </AppBar>
        // </div>
    );
};
Header.defaultProps = defaultProps;

export default Header;