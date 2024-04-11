import { createPortal } from 'react-dom';
import { IoCloseOutline } from 'react-icons/io5';
interface ModalProps {
	children: React.ReactNode;
	onClose:()=>void;
}
function Modal({ onClose, children }:ModalProps) {
	const handleOverlayClick = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return createPortal(
		<div
			onClick={(e)=>handleOverlayClick(e)}
			className='fixed  top-0 left-0 bottom-0 right-0 h-screen overflow-y-auto  backdrop-blur-sm	bg-bgOpaque  flex justify-center z-[400] py-[4.8rem] px-[1.2rem] items-start
    '>
			<div className='modal contant'>
				<div
					className='absolute flex items-center rounded-full ju hover:bg-textGray top-5 right-5 '
					onClick={onClose}>
					<button>
						<IoCloseOutline className='w-full text-white h-14 ' />
					</button>
				</div>

				{children}
			</div>
		</div>,
		document.body
	);
}

export default Modal;
