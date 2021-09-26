import './Checkbox.css';

export function Checkbox({ children, onChange, checked = false, disabled = false }) {
	return (
		<label className="Checkbox bounce">
			<input type="checkbox" checked={checked} disabled={disabled} onChange={onChange} />
			<svg viewBox="0 0 21 21">
				<polyline points="5 10.75 8.5 14.25 16 6"></polyline>
			</svg>
			{children && <span>{children}</span>}
		</label>
	);
}
