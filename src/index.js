import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import App from './App';
import Store from './store';

// import rootReducer from './reducers'

import './index.css';

ReactDOM.render(
	<Provider store={Store}>
		<MuiThemeProvider muiTheme={getMuiTheme()}>
			<App />
		</MuiThemeProvider>
	</Provider>, document.getElementById('root'));
registerServiceWorker();
