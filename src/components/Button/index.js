import './Button.css';

export function Button({
	children,
	onClick,
	variant,
	disabled = false,
	color = 'primary',
	type = 'button',
}) {
	return (
		<button
			className={`Button ${color} ${variant ?? ''} ${disabled ? 'disabled' : ''}`}
			type={type}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
