import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/index'
import {Provider} from 'react-redux'
import store from './store/index'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	(
		<Provider store={store}>
			<App />
		</Provider>
	),
	document.getElementById('root')
);

serviceWorker.unregister();




