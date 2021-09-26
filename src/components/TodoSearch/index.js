import { useContext } from 'react';
import { Input } from '../Control';
import { TodoContext } from '../TodoContent';
import './TodoSearch.css';

export function TodoSearch() {
	const { searchValue, setSearchValue, filterTodos, totalTodos } = useContext(TodoContext);

	return (
		<div className="TodoSearch">
			<Input
				type="text"
				placeholder="Search TODOs"
				value={searchValue}
				onChange={(event) => setSearchValue(event.target.value)}
			/>
			<p>
				records found <b>{filterTodos.length}</b> of <b>{totalTodos}</b>
			</p>
		</div>
	);
}
