
import React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	formControl: {
		margin: theme.spacing(2),
		minWidth: 120,
	},
	slider: {
		margin: theme.spacing(2),
		minWidth: 200,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));


const SelectDDL = (props) => {

	const classes = useStyles();

	return (
		<React.Fragment>
			<Grid item xs={12} md={12} lg={12}>
				<Paper>
					<form className={classes.root} autoComplete="off">
						<FormControl className={classes.formControl}>
							<InputLabel htmlFor="propertyType-simple">Fuel Type</InputLabel>
							<Select
								value={props.fuelType}
								onChange={props.handleFuelTypeChange}
								inputProps={{
									name: 'fuelType',
									id: 'fuelType-simple',
								}}
							>
								<MenuItem value={'electric'}>Electric</MenuItem>
								<MenuItem value={'naturalGas'}>Natural Gas</MenuItem>
								<MenuItem value={'Gasoline'}>Gasoline</MenuItem>
							</Select>
						</FormControl>
						<FormControl className={classes.formControl}>
							<InputLabel htmlFor="propertyType-simple">Start City</InputLabel>
							<Select
								value={props.startCity}
								onChange={props.handleStartCityChange}
								inputProps={{
									name: 'startCity',
									id: 'startCity-simple',
								}}
							>
								<MenuItem value={'calgary'}>Calgary</MenuItem>
								<MenuItem value={'edmonton'}>Edmonton</MenuItem>
								<MenuItem value={'vancouver'}>Vancouver</MenuItem>
								<MenuItem value={'toronto'}>Toronto</MenuItem>
							</Select>
						</FormControl>
						<FormControl className={classes.formControl}>
							<InputLabel htmlFor="propertyType-simple">End City</InputLabel>
							<Select
								value={props.endCity}
								onChange={props.handleEndCityChange}
								inputProps={{
									name: 'endCity',
									id: 'endCity-simple',
								}}
							>
								<MenuItem value={'calgary'}>Calgary</MenuItem>
								<MenuItem value={'edmonton'}>Edmonton</MenuItem>
								<MenuItem value={'vancouver'}>Vancouver</MenuItem>
								<MenuItem value={'toronto'}>Toronto</MenuItem>
							</Select>
						</FormControl>

						<FormControl className={classes.slider}>
							<Typography id="discrete-slider-always" gutterBottom>
								Vehicle Range
      						</Typography>
							<Slider
								defaultValue={props.vehicleRange}
								aria-labelledby="discrete-slider-always"
								step={10}
								marks
								min={100}
								max={500}
								valueLabelDisplay="on"
								onChangeCommitted={(e, val) => props.setVehicleRange(val)}
							/>
						</FormControl>
					</form>
				</Paper>
			</Grid>

		</React.Fragment>
	)
}

export default SelectDDL;
