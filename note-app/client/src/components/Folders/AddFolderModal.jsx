import Modal from '../common/Modal';
import useFacade from './hooks/useFacade';

const AddFolderModal = ({ modalRef }) => {
  const { addFolder, errorMessage } = useFacade();

  const handleAddFolder = (e) => {
    e.preventDefault();
    addFolder(e.target.folderName.value);
  };

  return (
    <Modal ref={modalRef}>
      <form className="flex flex-col gap-4" onSubmit={handleAddFolder}>
        <h1 className="text-2xl font-bold text-stone-700 border-b-2 border-stone-100 pb-1 w-full">
          Add new folder
        </h1>
        <div className="flex flex-col gap-2 w-full p-2 bg-stone-500 rounded-md border-solid border-[1px] border-stone-100">
          <label htmlFor="folderName" className="text-stone-100">
            Folder Name
          </label>
          <input
            type="text"
            id="folderName"
            name="folderName"
            autoFocus
            className="p-2 bg-stone-400 text-stone-100 rounded-md"
          />
        </div>
        {errorMessage && <p className="text-red-500 text-sm font-bold ml-1">{errorMessage}</p>}
        <button
          type="submit"
          className="p-2 bg-stone-500 text-stone-100 rounded-md hover:bg-stone-400 transition-all duration-300 ease-in-out"
        >
          Add
        </button>
      </form>
    </Modal>
  );
};

export default AddFolderModal;
