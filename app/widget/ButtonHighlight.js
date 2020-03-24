'use strict';
import React, { Component } from 'react';
import {
	Text,
	StyleSheet,
	TouchableHighlight,
	Dimensions
} from 'react-native';

const { width } = Dimensions.get('screen');

export default class ButtonHighlight extends Component {
	constructor (props) {
		super(props);
		this.state = {
			disabled: false,
			textColor: this.props.underlayTextColor || '#999999'
		};
	}

	onPress = () => {
		this.disable();
		this.props.onPress && this.props.onPress(this.enable);
	};

	enable = () => {
		this.setState({ disabled: false, textColor: this.props.underlayTextColor || '#999999' });
	};

	disable = () => {
		this.setState({
			disabled: true,
			textColor: this.props.underlayTextColor || '#999999'
		});
	};

	render () {
		const { underlayColor, title, buttonStyle, titleStyle, disabled } = this.props;
		return (
			<TouchableHighlight
				style={[CustomBtStyles.button, buttonStyle, { backgroundColor: 'white' }]}
				activeOpacity={0.5}
				disabled={this.state.disabled || disabled}
				onPress={this.onPress}
				underlayColor={underlayColor || '#e5e5e5'}>
				<Text
					style={[CustomBtStyles.buttonTitle, titleStyle, (this.state.disabled || disabled) ? { color: this.state.textColor } : null]}>
					{title}
				</Text>
			</TouchableHighlight>
		);
	}
}

const CustomBtStyles = StyleSheet.create({
	pointView: {
		position: 'absolute',
		top: 5,
		right: 20,
		width: 13,
		height: 13,
		borderRadius: 13 / 2,
		backgroundColor: '#ff0000'
	},
	button: {
		width: width - 60,
		height: 88,
		borderRadius: 10,
		overflow: 'visible',
		padding: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonTitle: {
		backgroundColor: 'transparent',
		textAlign: 'center',
		color: '#4b4b4b',
		fontSize: 34
	},
	initStyle: {
		marginTop: 0,
		marginRight: 0,
		marginBottom: 0,
		marginLeft: 0,
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		backgroundColor: 'transparent',
		borderColor: 'transparent'
	}
});
