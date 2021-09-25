import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
	let itemsStorage = initialValue;

	if (localStorage.getItem(key)) {
		itemsStorage = JSON.parse(localStorage.getItem(key));
	} else {
		localStorage.setItem(key, JSON.stringify(initialValue));
		// itemsStorage = initialValue;
	}

	const [item, setItem] = useState(itemsStorage);

	function saveItem(item) {
		const newItem = JSON.stringify(item);
		localStorage.setItem(key, newItem);
		setItem(item);
	}

	return [item, saveItem];
}
