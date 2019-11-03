import React from 'react';

// MaterialUI
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// Leaflet
import {
	Map,
	TileLayer,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
	},
	main: {
		marginTop: theme.spacing(8),
		marginBottom: theme.spacing(2),
	},
}));

export default function LeafletMap() {

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Container component="main" className={classes.main} >
				<Map
					style={{ height: "60vh", width: "100%" }}
					zoom={6}
					center={[51.0486, -114.0708]}>
					<TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

				</Map>
			</Container>
		</div>
	)
}
