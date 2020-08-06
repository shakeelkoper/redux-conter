import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers } from "redux";
import reducer from "./store/reducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import conterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";

const rootReducers = combineReducers({
	ctr: conterReducer,
	res: resultReducer,
});

const store = createStore(rootReducers, composeWithDevTools());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
