import './CreateTodoButton.css';
import { Button } from './../Button/index';

export function CreateTodoButton() {
	return (
		<div className="CreateTodoButton">
			<Button variant="fab">+</Button>
		</div>
	);
}
