/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import GridLoader from 'react-spinners/GridLoader';

const CountryDetail = () => {
    let { countryName } = useParams();
    const [country, setCountry] = useState({});
    const [loading, setLoading] = useState(false);

    const flagStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.1) 100%),url(${country.flag})`,
        backgroundPosition: 'center',
        margin: '50px', 
        padding: '50px', 
        color: 'white', 
        height: '300px', 
        width: '500px'
    }

    useEffect(() => {
        const loadCountry = async () => {
            setLoading(true);
            const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
            const res = await axios.get(url);
            setCountry(res.data[0]);
        };
        loadCountry()
            .then(() => setLoading(false))
            .catch(e => setLoading(false));
    }, [countryName]);

    return (
         <React.Fragment>
            <Container maxWidth="sm">
            <GridLoader loading={loading} color={'green'} size={15} />
                        <Paper 
                        elevation={3}
                        style={flagStyle}>
                        
                        <Box p={4}>

                        <Typography variant='inherit' component='h2'>
                            This is {countryName}
                        </Typography>

                        <Typography variant='inherit' component='h4'>
                            Capital: {country.capital}
                        </Typography>

                        <Typography variant='inherit' component='p'>
                            Region: {country.region}
                        </Typography>

                        <Typography component='p'>
                            Subregion: {country.subregion}
                        </Typography>

                        <Typography variant='inherit' component='h5'>
                            Population: {country.population}
                        </Typography>
                    </Box>
               </Paper>
        </Container>
    </React.Fragment>
    );
};

export default CountryDetail;