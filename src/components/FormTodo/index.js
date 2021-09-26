import { useState, useContext } from 'react';
import { ModalHeader } from './../Modal/ModalHeader';
import { ModalBody } from './../Modal/ModalBody';
import { ModalFooter } from './../Modal/ModalFooter';
import { Button } from '../Button';
import { TodoContext } from '../TodoContent';
import './FormTodo.css';
import { TextArea } from './../Control';

export function FormTodo({ onOpenModal }) {
	const [value, setValue] = useState('');
	const { addTodo } = useContext(TodoContext);

	function handleChange(event) {
		const v = event.target.value;
		setValue(v);
	}

	function handleSubmit(event) {
		event.preventDefault();
		addTodo(value);
		onOpenModal(false);
	}

	return (
		<>
			<form tabIndex="1" className="FormTodo" onSubmit={handleSubmit}>
				<ModalHeader>
					<h2>New todo</h2>
				</ModalHeader>
				<ModalBody>
					<TextArea placeholder="description" value={value} onChange={handleChange} />
				</ModalBody>
				<ModalFooter>
					<Button color="secundary" onClick={() => onOpenModal(false)}>
						Cancel
					</Button>
					<Button disabled={value === ''} type="submit">
						Save
					</Button>
				</ModalFooter>
			</form>
		</>
	);
}
