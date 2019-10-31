import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import ItemComponent from '../components/ItemComponent';

import { db } from '../config';

let itemsRef = db.ref('/items');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 30,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: '#6565fc'	
	},
	title: {
		marginBottom: 20,
		color: "white", 
		fontSize: 50, 
		textAlign:"center" 
	},
	buttonText: {
		fontSize: 14,
		color: '#111',
		textAlign: 'center',
		width:100,
		fontWeight: 'bold',
		padding:10
	},
	button: {
		width:100,
		height: 45,
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

export default class List extends Component {
	state = {
		items: []
	};

	componentDidMount() {
		itemsRef.on('value', snapshot => {
			let data = snapshot.val();
			let items = Object.values(data);
			this.setState({ items });
		});


	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>List</Text>
				{this.state.items.length > 0 ? (
					<ItemComponent items={this.state.items} />
				) : (
					<Text>No items</Text>
				)}
				<TouchableHighlight 
					style={styles.button}
				  	onPress={() => this.props.navigation.navigate('Home')}	
				>
					<Text style={styles.buttonText}>Home</Text>
					
				</TouchableHighlight>
			</View>
		);
	}
}