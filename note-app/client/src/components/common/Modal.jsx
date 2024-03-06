import { forwardRef } from 'react';

const Modal = forwardRef(({ children, closeWhenClickOutside = false }, ref) => {
  const handleClick = (event) => {
    if (event.target === ref.current && closeWhenClickOutside) {
      ref.current.close();
    }
  };

  return (
    <dialog
      ref={ref}
      onClick={handleClick}
      className="absolute max-w-[60vw] w-[100%] max-h-[100vh] z-10 backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
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
      {children}
    </dialog>
  );
});

export default Modal;
