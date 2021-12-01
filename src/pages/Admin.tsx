import React, { useState, useEffect } from 'react';
import axios from 'axios';
import firebase from 'firebase/app';
import { Item, ItemBasic } from './Home';

export const Admin = () => {
	const database = firebase.database();

	const [state, setState] = useState()

	function writeItem(item: ItemBasic) {
		firebase
			.database()
			.ref('items/' + item.itemid)
			.set(item);
	}

	// Initialize app
	useEffect(() => {}, []);

	return <h1>Welcome</h1>;
};
