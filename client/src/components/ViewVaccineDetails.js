import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import Switch from "@material-ui/core/Switch";

import ViewCityTable from "./ViewCityTable";
import ViewCityChart from "./ViewCityChart";

import { useDispatch ,useSelector} from "react-redux";
import { fetchCountries, fetchStates,fetchCities } from "../actions/vaccines";

const useStyles = makeStyles(theme => ({
        root: {
          padding: theme.spacing(12, 4),
        },
        card: {
          height: '100%',
          width: '100%',
          display: 'flex',
          border: '1px solid black',
          borderRadius: '5px',
        },
        icon: {
          padding: theme.spacing(2, 0),
        },
        title: {
          padding: theme.spacing(2),
        },
        formControl: {
            margin: theme.spacing.unit,
            minWidth: 120,
          },
          selectEmpty: {
            marginTop: theme.spacing.unit * 2,
          },
      }));

const ViewVaccineDetails = () => {
        
   const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchCountries());
    },[dispatch]);

    const countries = useSelector((state) => state.countries);
    const classes = useStyles();

    const [selectedCountry,setSelectedCountry] = React.useState("");
    const [selectedState,setSelectedState] = React.useState("");
    const [chartView, setChartView] = React.useState(false);

    const onCountryChange = (e) =>{
      setSelectedCountry(e.target.value);
      dispatch(fetchStates(e.target.value));
    }

    const onStateChange = (e) =>{
      setSelectedState(e.target.value);
      dispatch(fetchCities(e.target.value));
    }

    const states = useSelector((state) => state.states);

    return (
        <Container component="section" maxWidth="lg" className={classes.root}>
            <Grid container spacing={3} alignItems="stretch">
            <Grid item xs={2}>
            <FormControl className={classes.formControl}>
          <InputLabel htmlFor="country-native-simple">Country</InputLabel>
          <Select
            native
            onChange={onCountryChange} 
            value={selectedCountry}
            inputProps={{
              name: 'country',
              id: 'country-native-simple',
            }}
          >
            {countries.map((item) => (
                <option value={item.name}>{item.name}</option>
            ))}
          </Select>
        </FormControl>
        </Grid>
        <Grid item xs={2}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="state-native-simple">State</InputLabel>
          <Select
            native
            onChange={onStateChange}
            value={selectedState}
            inputProps={{
              name: 'state',
              id: 'state-native-simple',
            }}
          >
            {states.length>0 ?
              states.map((item) => (
                <option value={item.name}>{item.name}</option>
            )): <option value="" />}
          </Select>
        </FormControl>
        </Grid>
        <Grid item xs={2}>
        <FormControlLabel
        control={<Switch checked={chartView} onChange={(event) => {
          setChartView(event.target.checked)}}/>}
        label="Chart View"
      />
      </Grid>
        </Grid>
        <Grid container spacing={3} alignItems="stretch">
          {chartView ? <ViewCityChart/> :<ViewCityTable />}
        </Grid>
        </Container>
    )
                
}

export default ViewVaccineDetails;