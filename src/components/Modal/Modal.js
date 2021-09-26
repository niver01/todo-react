import ReactDOM from 'react-dom';
import './Modal.css';

const modal = document.createElement('div');
modal.classList.add('Modal');
document.body.appendChild(modal);

export function Modal({ children, open, width, onClose }) {
	console.log(open);

	function handleStopPropagation(event) {
		event.stopPropagation();
	}

	return ReactDOM.createPortal(
		<>
			{open && (
				<>
					<div className="Modal__overlay" onClick={onClose}>
						<div
							className="Modal__content"
							onClick={handleStopPropagation}
							style={{ maxWidth: width ?? 'auto' }}
						>
							{children}
						</div>
					</div>
				</>
			)}
		</>,
		modal
	);
}
