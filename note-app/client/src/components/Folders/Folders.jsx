import { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { LoginUserContext } from '../../layouts/RootLayout';
import { ListItem } from '../common/List';
import Modal from '../common/Modal';
import { selectFolders, addFolder } from './FolderState';

const useFacade = () => {
  const { setIsLoading } = useContext(LoginUserContext);
  const { folderId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, errorMessage, isLoading } = useSelector(selectFolders);

  useEffect(() => {
    if (isLoading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [isLoading, setIsLoading]);

  const handleAddFolder = (folderName) => {
    if (folderName) {
      const folderId = `folder-${data.length + 1}`;
      dispatch(addFolder({ id: folderId, name: folderName }));
      dispatch({
        type: 'folders/errorMessage',
        payload: '',
      });
      return navigate(`/${folderId}`);
    } else {
      dispatch({
        type: 'folders/errorMessage',
        payload: 'Folder name is required',
      });
      return false;
    }
  };

  return {
    folderId,
    listFolder: data,
    addFolder: handleAddFolder,
    navigate,
    errorMessage: errorMessage,
  };
};

const AddFolderModal = ({ modalRef }) => {
  const { addFolder, errorMessage } = useFacade();

  const handleAddFolder = (e) => {
    e.preventDefault();
    addFolder(e.target.folderName.value);
  };

  const getNum = function (e) {
    console.log("Num Tuan:", e.target.value);
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
            onChange={getNum}
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

const ListFolders = () => {
  const { folderId, listFolder, navigate } = useFacade();

  return (
    <ListItem
      ulClassName="w-full p-0 m-0 list-none cursor-pointer text-stone-100 text-lg font-bold hover:text-stone-200"
      list={listFolder}
      activeId={folderId}
      liClass="p-2 hover:bg-stone-400 hover:rounded-md transition-all duration-300 ease-in-out border-solid border-[1px] border-stone-100 pb-2 w-full rounded-md mb-2 select-none"
      liActiveClass="bg-stone-400 rounded-md transition-all duration-300 ease-in-out border-solid border-[1px] border-stone-100 pb-2 w-full rounded-md mb-2"
      onClickItem={(id) => navigate(`/${id}`)}
    />
  );
};

const Folders = () => {
  const { folderId } = useFacade();
  const curFolderId = useRef(folderId);
  const addFolderModalRef = useRef(null);

  useEffect(() => {
    if (curFolderId.current !== folderId) {
      curFolderId.current = folderId;
      addFolderModalRef.current.close();
    }
  }, [folderId]);

  return (
    <>
      <div className="flex">
        <div className="w-1/4 bg-stone-500 p-3 h-full overflow-y-auto min-h-[80vh]">
          <h1 className="text-2xl font-bold mb-4 text-stone-100 border-b-2 border-stone-100 pb-2 w-full text-center">
            Folders
          </h1>
          <div
            className="flex items-center justify-between p-2 hover:bg-stone-400 hover:rounded-md cursor-pointer transition-all duration-300 ease-in-out border-solid border-[1px]
         border-stone-100 pb-2 w-full hover:text-stone-200 rounded-md mb-2 select-none"
            onClick={() => addFolderModalRef.current.showModal()}
          >
            <span className="text-stone-100">+ Add new folder</span>
          </div>
          <ListFolders />
        </div>
        <div className="w-1/4">{folderId && <h1>Folder {folderId}</h1>}</div>
        <div className="w-2/4">
          <Outlet />
        </div>
      </div>
      <AddFolderModal modalRef={addFolderModalRef} />
    </>
  );
};

export default Folders;
