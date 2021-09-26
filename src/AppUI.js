import { useState } from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoContext } from './components/TodoContent';
import { Modal } from './components/Modal';
import { FormTodo } from './components/FormTodo';
import { NoData } from './components/NoData';
import './App.css';

export function AppUI() {
	const [openModal, setOpenModal] = useState(false);
	return (
		<div className="App">
			<div className="App-header">
				<div className="App-header__content">
					<TodoCounter />
					<TodoSearch />
				</div>
				<div className="App-header__wave">
					<div style={{ height: '150px', overflow: 'hidden' }}>
						<svg
							viewBox="0 0 500 150"
							preserveAspectRatio="none"
							style={{ height: '100%', width: '100%' }}
						>
							<path
								d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
								style={{ stroke: 'none' }}
							></path>
						</svg>
					</div>
				</div>
			</div>

			<div className="App-body">
				<TodoContext.Consumer>
					{({ filterTodos, toggleCompleteTodo, deleteTodo, totalTodos }) => (
						<>
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
									<NoData onOpenModal={setOpenModal} />
								)}
							</TodoList>

							{totalTodos > 0 && <CreateTodoButton onOpenModal={setOpenModal} />}
						</>
					)}
				</TodoContext.Consumer>
			</div>

			<Modal open={openModal} width="26em" onClose={() => setOpenModal(false)}>
				<FormTodo onOpenModal={setOpenModal} />
			</Modal>
		</div>
	);
}
