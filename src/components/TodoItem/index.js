import './TodoItem.css';

export function TodoItem({ text, completed, onToggleComplete, onDelete }) {
	return (
		<li className="TodoItem">
			<div className="Icon Icon-check">
				<input type="checkbox" checked={completed} onChange={onToggleComplete} />
			</div>
			<p className={`TodoItem-text ${completed ? 'TodoItem-text--completed' : ''}`}>{text}</p>
			<div className="Icon Icon-delete">
				<button onClick={onDelete}>x</button>
			</div>
		</li>
	);
}
