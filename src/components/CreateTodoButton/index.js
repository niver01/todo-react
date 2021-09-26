import { Button } from './../Button/index';
import './CreateTodoButton.css';

export function CreateTodoButton({ onOpenModal }) {
	function handleOpenModal() {
		onOpenModal?.(true);
	}

	return (
		<div className="CreateTodoButton">
			<Button variant="fab" onClick={handleOpenModal}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
					<path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
				</svg>
			</Button>
		</div>
	);
}
