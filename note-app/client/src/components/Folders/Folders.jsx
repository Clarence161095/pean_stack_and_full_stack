import { memo, useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { LoginUserContext } from '../../layouts/RootLayout';
import { ListItem } from '../common/List';
import Modal from '../common/Modal';
import { addFolder, selectFolders } from './FolderState';
import { get } from '../../configs/api';
import { post } from '../../configs/api';

//Frontend
const getFolders = () => {
  return async (dispatch) => {
    dispatch({
      type: 'folders/isLoading',
      payload: true,
    });
    const data = await get('/api/folders'); // get folder for dispatch 3
    dispatch({
      type: 'folders/isLoading',
      payload: false,
    });
    dispatch({
      type: 'folders/initData',
      payload: data,
    });
  };
};
const useAddFolder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddFolder = (folderName) => {
    if (folderName) {
      post('/api/folders', { name: folderName }).then((res) => {
        if (res.data) {
          const folder = res.data;
          dispatch(addFolder(folder));
          dispatch({
            type: 'folders/errorMessage',
            payload: '',
          });
          return navigate(`/${folder.id}`);
        } else {
          dispatch({
            type: 'folders/errorMessage',
            payload: res.errorMessage || 'Add folder failed',
          });
        }
      });
    } else {
      dispatch({
        type: 'folders/errorMessage',
        payload: 'Folder name is required',
      });
      return false;
    }
  };
  return handleAddFolder;
};

const useLoadings = () => {
  const { setIsLoading } = useContext(LoginUserContext);
  const { isLoading } = useSelector(selectFolders);
  useEffect(() => {
    if (isLoading) {
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [isLoading, setIsLoading]);
};
const useInitFolders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFolders());
  });
};

const useFacade = () => {
  const { folderId } = useParams();
  const { data, errorMessage } = useSelector(selectFolders);
  const handleAddFolder = useAddFolder();
  const navigate = useNavigate();
  useLoadings(); // create hook de giam tai code cho ngan lai

  return {
    folderId,
    listFolder: data.find((folder) => folder.id === folderId) ? folderId : data[0]?.id || '',
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

const ListFolders = memo(({ folderId }) => {
  const { listFolder, navigate } = useFacade();

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
});

//create hook for useClose Modal
const useCloseModal = (folderId, curFolderId, addFolderModalRef) => {
  useEffect(() => {
    if (curFolderId.current !== folderId) {
      curFolderId.current = folderId;
      addFolderModalRef.current.close();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folderId]);
};

const Folders = () => {
  const { folderId } = useFacade();
  const curFolderId = useRef(folderId);
  const addFolderModalRef = useRef(null);
  useInitFolders(); // hook for init folders
  useCloseModal(folderId, curFolderId, addFolderModalRef); // made hook for useClose modal this, same as before
  // this hook is so special , need 3 parameters
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
          <ListFolders folderId={folderId} />
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
