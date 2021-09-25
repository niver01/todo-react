import { useContext } from 'react';
import { TodoContext } from '../TodoContent';
import './TodoCounter.css';

export function TodoCounter() {
	const { totalTodos, todosCompleted } = useContext(TodoContext);

	return (
		<h2>
			Has completado {todosCompleted} de {totalTodos} TODOs
		</h2>
	);
}
