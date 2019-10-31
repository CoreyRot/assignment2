import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet,
	TextInput,
	Button
} from 'react-native';

import { db } from '../config';

let addItem = item => {
	db.ref('/items').push({
		name: item
	});
};

export default class AddItem extends Component {
	state = {
		name: ''
	};

	handleChange = e => {
		this.setState({
			name: e.nativeEvent.text
		});
	};
	handleSubmit = () => {
		addItem(this.state.name);

	};

	render() {
		return (
			<View style={styles.main}>
				<Text style={styles.title}>Add Item</Text>
				<TextInput style={styles.itemInput} onChange={this.handleChange} />
				<TouchableHighlight
					style={styles.button}
					underlayColor="white"
					onPress={this.handleSubmit}
				>
					<Text style={styles.buttonText}>Add</Text>
					
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
	title: {
		marginBottom: 20,
		color: "white", 
		fontSize: 50, 
		textAlign:"center" 
	},
	itemInput: {
		height: 50,
		padding: 4,
		marginRight: 5,
		fontSize: 23,
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: 8,
		color: 'white'
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