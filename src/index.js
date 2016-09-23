import React from 'react';
import {render} from 'react-dom';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import Routers from './routers'
import './main.css'
import 'highlight.js/styles/github.css';
import './post.css';
render(<Routers />,document.getElementById('root'));
