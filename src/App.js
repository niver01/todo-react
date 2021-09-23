import './App.css';

import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { TodoSearch } from './components/TodoSearch/TodoSearch';

function generateUUID() {
	var d = new Date().getTime();
	var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = (d + Math.random() * 16) % 16 | 0;
		d = Math.floor(d / 16);
		return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
	});
	return uuid;
}

const TODOS = [
	{
		_id: generateUUID(),
		text: 'crear todo con react',
		completed: false,
	},
	{
		_id: generateUUID(),
		text: 'crear todo con angular',
		completed: false,
	},
	{
		_id: generateUUID(),
		text: 'crear todo con vue',
		completed: false,
	},
	{
		_id: generateUUID(),
		text: 'crear todo con svelte',
		completed: false,
	},
];

function App() {
	return (
		<div className="App">
			<TodoCounter />

			<TodoSearch />

			<TodoList>
				{TODOS.map((item, index) => (
					<TodoItem key={item._id} {...item} />
				))}
			</TodoList>
		</div>
	);
}

export default App;
