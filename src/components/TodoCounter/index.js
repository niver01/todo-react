import { useContext } from 'react';
import { TodoContext } from '../TodoContent';
import './TodoCounter.css';

export function TodoCounter() {
	const { totalTodos, todosCompleted } = useContext(TodoContext);

	return (
		<h2 className="TodoCounter">
			You have completed {todosCompleted} of {totalTodos} TODOs
		</h2>
	);
}
