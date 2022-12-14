import React, {Component} from 'react';
import allReducers from './src/lab11/reducers/index';
import {configureStore} from 'redux';
import {Provider} from 'react-redux';
import Counter from './src/lab11/component/counter';
const store = configureStore(allReducers);
export default class App extends Component {
	render() {
		rreturn(
			<Provider store={store}>
				<Counter />
			</Provider>,
		);
	}
}
