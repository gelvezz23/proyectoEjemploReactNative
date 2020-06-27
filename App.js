/** @format */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import Location from './components/Location';
import Store from './store';

export default function App() {
	return (
		<Provider store={Store}>
			<View style={styles.container}>
				<StatusBar style='auto' />
				<Location />
			</View>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
