import { forwardRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef((props, ref) => {
  return createPortal(
    <dialog
      ref={ref}
      className="fixed max-w-[60vw] w-[100%] z-20 backdrop:bg-stone-900/90 p-4 rounded-md shadow-md left-[25%] top-[10%]"
    >
      <button className="absolute top-2 right-2" onClick={() => ref.current.close()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500 hover:text-red-500 transition duration-300 ease-in-out
          transform-gpu hover:scale-125 cursor-pointer hover:rotate-180 hover:bg-inherit hover:shadow-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      {props.children}
    </dialog>,
    document.getElementById('modal-root'),
  );
});

export default Modal;
