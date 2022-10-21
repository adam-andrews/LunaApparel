import '../styles/globals.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import store from '../redux/store';
function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />;
		</Provider>
	);
}

export default MyApp;
