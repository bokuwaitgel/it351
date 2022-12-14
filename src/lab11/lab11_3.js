import React, {Component} from 'react';
import allReducers from './reducers/index.js';
import {configureStore} from 'redux';
import {Provider} from 'react-redux';
import Counter from './component/counter.js';
const store = configureStore(allReducers);
export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Counter />
			</Provider>
		);
	}
}
