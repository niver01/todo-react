import { useState, createContext } from 'react';
import { useLocalStorage } from './../../hooks/useLocalStorage';
import { generateUUID } from './../../utils/utils';

const TodoContext = createContext();

function TodoProvider({ children }) {
	const [searchValue, setSearchValue] = useState('');
	const [todos, setTodos] = useLocalStorage('TODOS_V1', []);

	const totalTodos = todos.length;
	const todosCompleted = todos.filter((todo) => !!todo.completed).length;

	const filterTodos = todos.filter((item) =>
		item.text.toLowerCase().includes(searchValue.toLowerCase())
	);

	function saveTodos(newTodos) {
		setTodos(newTodos);
		localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
	}

	function toggleCompleteTodo(id) {
		const index = todos.findIndex((t) => t._id === id);
		if (index !== -1) {
			const newTodos = [...todos];
			newTodos[index].completed = !newTodos[index].completed;
			saveTodos(newTodos);
		}
	}

	function deleteTodo(id) {
		const index = todos.findIndex((t) => t._id === id);
		if (index !== -1) {
			const newTodos = [...todos];
			newTodos.splice(index, 1);
			saveTodos(newTodos);
		}
	}

	function addTodo(text) {
		const newTodos = [...todos];
		newTodos.push({
			_id: generateUUID(),
			text,
			completed: false,
		});
		saveTodos(newTodos);
	}

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
				addTodo,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
}

export { TodoContext, TodoProvider };
