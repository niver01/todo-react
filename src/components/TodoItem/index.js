import { Checkbox } from '../Checkbox';
import './TodoItem.css';

export function TodoItem({ text, completed, onToggleComplete, onDelete }) {
	return (
		<li className="TodoItem">
			<div className="Icon Icon-check">
				<Checkbox checked={completed} onChange={onToggleComplete} />
			</div>
			<p className={`TodoItem-text ${completed ? 'TodoItem-text--completed' : ''}`}>{text}</p>
			<div className="Icon Icon-delete">
				<button onClick={onDelete}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
					</svg>
				</button>
			</div>
		</li>
	);
}
