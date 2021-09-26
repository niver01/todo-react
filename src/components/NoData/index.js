import { useContext } from 'react';
import { TodoContext } from '../TodoContent';
import { Button } from './../Button/index';
import './NoData.css';

export function NoData({ onOpenModal }) {
	const { totalTodos } = useContext(TodoContext);

	function handleOpenModal() {
		onOpenModal?.(true);
	}

	return (
		<div className="NoData">
			<p>No records found</p>
			{totalTodos === 0 && (
				<Button variant="fab" onClick={handleOpenModal}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
						<path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
					</svg>
				</Button>
			)}
		</div>
	);
}
