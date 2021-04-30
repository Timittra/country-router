import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
    display: 'flex',
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const Home = () => {
  const [countries, setCountries] = useState([]);
  const classes = useStyles();
  

  useEffect(() => {
    const url = 'https://restcountries.eu/rest/v2/all';
    fetch(url)
      .then(res => res.json())
      .then(data =>setCountries(data));
  }, []);

  return (
    <Container maxWidth='lg'>
      <Grid container className={classes.root} spacing={3}>
        {countries.map((country) => (
          <Grid xs={12} sm={6} lg={6} key={country.name} item>
            <Country country={country} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
