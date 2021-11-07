import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {BrowserRouter} from "react-router-dom";
import Reducer from "./Store/Reducer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const rootReducer=combineReducers({
  Reducer:Reducer
});

const store = createStore(rootReducer , applyMiddleware(thunk));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}> 
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
