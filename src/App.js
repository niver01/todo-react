import './App.css';

import { generateUUID } from './utils/utils';
import { TodoProvider } from './components/TodoContent';
import { AppUI } from './AppUI';

const TODOS_DEFAULT = [
	{
		_id: generateUUID(),
		text: 'crear todo con react crear todo con react crear todo con react crear todo con react ',
		completed: false,
	},
	{
		_id: generateUUID(),
		text: '12 todo con angular',
		completed: true,
	},
	{
		_id: generateUUID(),
		text: 'prueba todo con vue',
		completed: false,
	},
	{
		_id: generateUUID(),
		text: 'xd todo con svelte',
		completed: true,
	},
	{
		_id: generateUUID(),
		text: 'crear todo con angular',
		completed: false,
	},
	{
		_id: generateUUID(),
		text: 'crear todo 10 vue',
		completed: false,
	},
	{
		_id: generateUUID(),
		text: 'crear todo 12 svelte',
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
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	);
}

export default App;
