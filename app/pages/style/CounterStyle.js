'use strict';
import {
	StyleSheet,
} from 'react-native';

const CounterStyle = StyleSheet.create({
	// 整体居中
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	counterTxt: {
		color: '#333333',
		fontSize: 30,
	}
});

export default CounterStyle;
