import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

// Map
import MapContainer from '../containers/mapContainer';

//DDL
import Select from '../components/select';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="#">
				Grant Moss
      </Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles(theme => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.common.white,
		},
	},
	appBar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	toolbar: {
		flexWrap: 'wrap',
	},
	toolbarTitle: {
		flexGrow: 1,
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	footer: {
		borderTop: `1px solid ${theme.palette.divider}`,
		marginTop: theme.spacing(8),
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
		[theme.breakpoints.up('sm')]: {
			paddingTop: theme.spacing(6),
			paddingBottom: theme.spacing(6),
		},
	},
}));

export default function MapBoard() {

	const [fuelType, setFuelType] = useState('electric');
	const [startCity, setStartCity] = useState('calgary');
	const [endCity, setEndCity] = useState('edmonton');
	const [vehicleRange, setVehicleRange] = useState(450);

	function handleFuelTypeChange(event) {
		setFuelType(event.target.value)
	}

	function handleStartCityChange(event) {
		setStartCity(event.target.value)
	}

	function handleEndCityChange(event) {
		setEndCity(event.target.value)
	}

	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar position="static" color="default" elevation={0} className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
					<Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
						Vehicle Map
                    </Typography>
				</Toolbar>
			</AppBar>
			<Container component="main">
				<Select
					fuelType={fuelType}
					startCity={startCity}
					endCity={endCity}
					vehicleRange={vehicleRange}
					handleFuelTypeChange={handleFuelTypeChange}
					handleStartCityChange={handleStartCityChange}
					handleEndCityChange={handleEndCityChange}
					setVehicleRange={setVehicleRange}
				/>
				<MapContainer
					fuelType={fuelType}
					startCity={startCity}
					endCity={endCity}
					vehicleRange={vehicleRange}
				/>
			</Container>
			<Container maxWidth="md" component="footer" className={classes.footer}>
				<Box mt={5}>
					<Copyright />
				</Box>
			</Container>
		</React.Fragment>
	);
}
