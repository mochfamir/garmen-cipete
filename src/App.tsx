import React, { useState, useEffect } from 'react';
import axios from 'axios';
import firebase from 'firebase/app';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import { Home } from './pages/Home';
import { Admin } from './pages/Admin';
import { Detail } from './pages/Detail';
import { Santara } from './pages/Santara';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/admin'>
					<Admin />
				</Route>
				<Route path='/santara'>
					<Santara />
				</Route>
				<Route path='/detail/:shopid/:itemid'>
					<Detail />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
