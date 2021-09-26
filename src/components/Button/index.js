import './Button.css';

export function Button({ children, onClick, variant, color = 'primary', type = 'button' }) {
	return (
		<button className={`Button ${color} ${variant ?? ''}`} type={type} onClick={onClick}>
			{children}
		</button>
	);
}
