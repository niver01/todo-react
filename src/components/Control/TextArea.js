export function TextArea({ onChange, placeholder = '', value = '' }) {
	return (
		<textarea
			className="Control Control__textarea"
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		></textarea>
	);
}
