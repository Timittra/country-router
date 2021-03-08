import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Country.css';
import { Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Box, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 800,
      height: 450,
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    titleBar: {
      background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
      color: 'white',
    },
    link: {
        margin: '10px',
    }
  }));

const Country = (props) => {
    let { name, flag } = props.country || {};
    const history = useHistory();
    const classes = useStyles();

    // const name = props.country?.name;
    const handleClick = (countryName) =>{
        const url = `/country/${countryName}`;
        history.push(url);
    }
    return (
        <div className={classes.root}>
            <GridList cellHeight={200} spacing={1} className={classes.gridList}>
                <GridListTile key={name} cols={props.country.featured ? 1 : 0} rows={props.country.featured ? 1 : 0}>
                    <img src={flag} alt="" />
                    <GridListTileBar
                        title={`This is ${name}`}
                        titlePosition="top"
                        className={classes.titleBar}
                    />
                    </GridListTile>
                <Typography component='p' className={classes.link}>
                    <Link to={`/country/${name}`}>Show Detail about {name}</Link>
                    <Box m={2} />
                </Typography>
                <Typography component='p' style={{ marginTop: '-180px' }}>
                    <Button
                        variant="outline-success"
                        onClick={() => handleClick(name)}
                    >Show {name}'s Detail</Button>
                    <Box m={2} />
                </Typography>
            </GridList>
        </div>
    );
};

export default Country;