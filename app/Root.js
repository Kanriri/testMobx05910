'use strict';
import React, { Component } from 'react';
import { Provider } from 'mobx-react'
import store from './store/store';
import Counter from './pages/Counter';

export default class Root extends Component {
	render () {
		return (
			<Provider RootStore={store}>
				<Counter/>
			</Provider>
		);
	}
}
