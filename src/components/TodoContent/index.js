import { useState } from 'react';
import { createContext } from 'react';
import { useLocalStorage } from './../../hooks/useLocalStorage';

const TodoContext = createContext();

function TodoProvider({ children }) {
	const [searchValue, setSearchValue] = useState('');
	const [todos, setTodos] = useLocalStorage('TODOS_V1', []);

	const totalTodos = todos.length;
	const todosCompleted = todos.filter((todo) => !!todo.completed).length;

	const filterTodos = todos.filter((item) =>
		item.text.toLowerCase().includes(searchValue.toLowerCase())
	);

	function toggleCompleteTodo(id) {
		const index = todos.findIndex((t) => t._id === id);
		if (index !== -1) {
			const newTodos = [...todos];
			newTodos[index].completed = !newTodos[index].completed;
			setTodos(newTodos);
			localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
		}
	}

	function deleteTodo(id) {
		const index = todos.findIndex((t) => t._id === id);
		if (index !== -1) {
			const newTodos = [...todos];
			newTodos.splice(index, 1);
			setTodos(newTodos);
			localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
		}
	}

	console.log('filterTodos', filterTodos);

	return (
		<TodoContext.Provider
			value={{
				filterTodos,
				totalTodos,
				todosCompleted,
				toggleCompleteTodo,
				deleteTodo,
				searchValue,
				setSearchValue,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
}

export { TodoContext, TodoProvider };
