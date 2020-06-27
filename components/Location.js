/** @format */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import { addLatLng } from './../actions';

function App({ addLatLng }) {
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestPermissionsAsync();
			if (status !== 'granted') {
				setErrorMsg('Permission to access location was denied');
			}

			let location = await Location.getCurrentPositionAsync({});
			const { latitude, longitude } = location.coords;

			setLocation({ latitud: latitude, longitud: longitude });
		})();
	});

	let text = 'Waiting..';
	if (errorMsg) {
		text = errorMsg;
	} else if (location) {
		text = JSON.stringify(location);
		addLatLng(text);
	}

	return (
		<View style={styles.container}>
			<Text>{text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 200,
	},
});

const mapDispathToProps = {
	addLatLng,
};
export default connect(null, mapDispathToProps)(App);
