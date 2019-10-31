import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class Home extends Component {
	render() {
		return (
			<View style={styles.main}>
				<Text style={{ color: "white", fontSize:"50px", textAlign:"center" }}>Home Screen</Text>
				<TouchableHighlight 
					style={styles.button}
				  	onPress={() => this.props.navigation.navigate('AddItem')}	
				>
					<Text style={styles.buttonText}>Add Item</Text>
					
				</TouchableHighlight>
				<TouchableHighlight 
					style={styles.button}
				  	onPress={() => this.props.navigation.navigate('List')}	
				>
					<Text style={styles.buttonText}>List Of items</Text>
					
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		padding: 30,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: '#6565fc'
	},	
	buttonText: {
		fontSize: 14,
		color: '#111',
		textAlign: 'center',
		width:100,
		padding:10,
		fontWeight: 'bold'
	},
	button: {
		width:200,
		height: 50,
		flexDirection: 'row',
		backgroundColor: 'white',
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		marginTop: 10,
		alignSelf: 'center',
		justifyContent: 'center'
	}
});