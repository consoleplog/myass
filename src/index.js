import React from 'react';
import {render} from 'react-dom';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import Routers from './routers'
import './main.css'
import Test from './Test/Test'
render(<Routers />,document.getElementById('root'));
