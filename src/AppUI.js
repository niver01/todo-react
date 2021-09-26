import { TodoCounter } from './components/TodoCounter';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoContext } from './components/TodoContent';
import { Modal, ModalHeader, ModalBody, ModalFooter } from './components/Modal';
import { useState } from 'react';
import { Button } from './components/Button';

export function AppUI() {
	const [open1, setOpen1] = useState(false);
	const [open2, setOpen2] = useState(false);
	return (
		<div className="App">
			<div className="App-header">
				<TodoCounter />
				<TodoSearch />
			</div>

			<div className="App-body">
				<TodoContext.Consumer>
					{({ filterTodos, toggleCompleteTodo, deleteTodo }) => (
						<TodoList>
							{filterTodos.length ? (
								filterTodos.map((item) => (
									<TodoItem
										key={item._id}
										{...item}
										onToggleComplete={() => toggleCompleteTodo(item._id)}
										onDelete={() => deleteTodo(item._id)}
									/>
								))
							) : (
								<p>No se encontarron registros</p>
							)}

							<Button onClick={() => setOpen1(true)}>Open modal</Button>
						</TodoList>
					)}
				</TodoContext.Consumer>
			</div>

			<CreateTodoButton />

			<Modal open={open1} width="26em" onClose={() => setOpen1(false)}>
				<ModalHeader>
					<h2>tittle</h2>
				</ModalHeader>
				<ModalBody>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet laudantium ullam
						laborum deleniti veritatis ab asperiores beatae iure commodi illo aliquam consectetur
						quibusdam exercitationem sed nisi modi, repudiandae inventore earum. Quisquam sint dolor
						et nemo odio quo, deserunt, vel molestias atque tempore, veritatis assumenda maiores
						facilis nobis provident enim ad delectus neque iste nesciunt eveniet. Repellat placeat
						ut accusantium laudantium.
					</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet laudantium ullam
						laborum deleniti veritatis ab asperiores beatae iure commodi illo aliquam consectetur
						quibusdam exercitationem sed nisi modi, repudiandae inventore earum. Quisquam sint dolor
						et nemo odio quo, deserunt, vel molestias atque tempore, veritatis assumenda maiores
						facilis nobis provident enim ad delectus neque iste nesciunt eveniet. Repellat placeat
						ut accusantium laudantium.
					</p>
				</ModalBody>
				<ModalFooter>
					<Button color="secundary" onClick={() => setOpen1(false)}>
						Close modal
					</Button>
					<Button onClick={() => setOpen2(true)}>Open modal child</Button>
				</ModalFooter>
			</Modal>
			<Modal open={open2} width="10em">
				<ModalHeader>
					<h2>tittle</h2>
				</ModalHeader>
				<ModalBody>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam illo nulla facilis
						architecto dolorum sit quaerat repellendus eligendi veniam tempore libero sint nostrum
						delectus corporis, id nesciunt sequi tenetur doloremque.
					</p>
				</ModalBody>
				<ModalFooter>
					<Button onClick={() => setOpen2(false)}>Close modal child</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}
