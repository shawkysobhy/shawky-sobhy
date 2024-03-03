import { createPortal } from 'react-dom';
import { IoCloseOutline } from 'react-icons/io5';

function Modal({ onClose, children }) {
	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose(); 
		}
	};

	return createPortal(
		<div
			onClick={handleOverlayClick}
			className='fixed  top-0 left-0 bottom-0 right-0 h-screen overflow-y-auto  backdrop-blur-sm	bg-bgOpaque  flex justify-center z-[400] py-[4.8rem] px-[1.2rem] 
    '>
			<div className='modal contant'>
				<button
					className='top-[1.2rem] right-[1.2rem] absolute  '
					onClick={onClose}>
					<IoCloseOutline className='icon-close' />
				</button>

				{children}
			</div>
		</div>,
		document.body
	);
}

export default Modal;
