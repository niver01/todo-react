import { useContext } from 'react';
import { TodoContext } from '../TodoContent';
import './TodoSearch.css';

export function TodoSearch() {
	const { searchValue, setSearchValue, filterTodos, totalTodos } = useContext(TodoContext);

	return (
		<div>
			<input
				type="text"
				placeholder="Search TODOs"
				value={searchValue}
				onChange={(event) => setSearchValue(event.target.value)}
			/>
			<p>
				{filterTodos.length > 1 ? 'registros encontrados' : 'registro encontrado'}{' '}
				{filterTodos.length} de {totalTodos}
			</p>
		</div>
	);
}
