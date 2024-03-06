import { useContext, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ListItem } from '../common/List';
import Modal from '../common/Modal';
import { LoginUserContext } from '../../layouts/RootLayout';
import Loading from '../Loading';

const mockFolders = [
  {
    id: 'folder-1',
    name: 'Folder 1',
  },
  {
    id: 'folder-2',
    name: 'Folder 2',
  },
  {
    id: 'folder-3',
    name: 'Folder 3',
  },
  {
    id: 'folder-4',
    name: 'Folder 4',
  },
];

// const useFacade = () => {
//   const { setIsLoading } = useContext(LoginUserContext);
//   return {
//     folders: mockFolders,
//     addFolder: (folderName) => {
//       console.log("Add Folder Name: ", folderName);
//     },
//     isLoading: false,
//    };
// }

const Folders = () => {
  const { isLoading, setIsLoading } = useContext(LoginUserContext);

  const { folderId } = useParams();
  const navigate = useNavigate();
  const modal = useRef(null);

  const handleAddFolder = (e) => {
    e.preventDefault();
    const folderName = e.target.folderName.value;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      modal.current.close();
    }, 2000);
    console.log(folderName);
  };

  return (
    <>
      <div className="flex">
        <div className="w-1/4 bg-stone-500 p-3 h-full overflow-y-auto min-h-[80vh]">
          <h1 className="text-2xl font-bold mb-4 text-stone-100 border-b-2 border-stone-100 pb-2 w-full text-center">
            Folders
          </h1>
          {/* Add new folder */}
          <div
            className="flex items-center justify-between p-2 hover:bg-stone-400 hover:rounded-md cursor-pointer transition-all duration-300 ease-in-out border-solid border-[1px]
         border-stone-100 pb-2 w-full hover:text-stone-200 rounded-md mb-2"
            onClick={() => modal.current.showModal()}
          >
            <span className="text-stone-100">+ Add new folder</span>
          </div>
          <ListItem
            ulClassName="w-full p-0 m-0 list-none cursor-pointer text-stone-100 text-lg font-bold hover:text-stone-200"
            list={mockFolders}
            activeId={folderId}
            liClass="p-2 hover:bg-stone-400 hover:rounded-md transition-all duration-300 ease-in-out border-solid border-[1px] border-stone-100 pb-2 w-full rounded-md mb-2"
            liActiveClass="bg-stone-400 rounded-md transition-all duration-300 ease-in-out border-solid border-[1px] border-stone-100 pb-2 w-full rounded-md mb-2"
            onClickItem={(id) => navigate(`/${id}`)}
          />
        </div>
        <div className="w-1/4">{folderId && <h1>Folder {folderId}</h1>}</div>
        <div className="w-2/4">{/* <Outlet /> */}</div>
      </div>
      <Modal ref={modal}>
        <form className="flex flex-col gap-4" onSubmit={handleAddFolder}>
          <h1 className="text-2xl font-bold text-stone-700 border-b-2 border-stone-100 pb-1 w-full">
            Add new folder
          </h1>
          {isLoading && <Loading />}
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
          <button
            type="submit"
            className="p-2 bg-stone-500 text-stone-100 rounded-md hover:bg-stone-400 transition-all duration-300 ease-in-out"
          >
            Add
          </button>
        </form>
      </Modal>
    </>
  );
};

export default Folders;
