import { TodoCounter } from './components/TodoCounter';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoContext } from './components/TodoContent';
import { Modal } from './components/Modal';

export function AppUI() {
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
						</TodoList>
					)}
				</TodoContext.Consumer>
			</div>

			<CreateTodoButton />

			<Modal>
				<h1>Holi</h1>
			</Modal>
		</div>
	);
}
