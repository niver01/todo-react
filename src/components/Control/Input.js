export function Input({ onChange, placeholder = '', value = '', type = 'text' }) {
	return (
		<input
			className="Control Control__input"
			placeholder={placeholder}
			type={type}
			value={value}
			onChange={onChange}
		/>
	);
}
