import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import AddFolderModal from './AddFolderModal';
import useFacade from './hooks/useFacade';
import useInitFolders from './hooks/useInitFolders';
import ListFolders from './ListFolders';

const Folders = () => {
  const { folderId, setErrorMessages } = useFacade();
  const curFolderId = useRef(folderId);
  const addFolderModalRef = useRef(null);
  useInitFolders();

  useEffect(() => {
    if (curFolderId.current !== folderId) {
      curFolderId.current = folderId;
      addFolderModalRef.current.close();
    }
  }, [folderId]);

  const handleAddFolder = () => {
    addFolderModalRef.current.showModal();
    addFolderModalRef.current.querySelector('#folderName').focus();
    addFolderModalRef.current.querySelector('#folderName').value = '';
    setErrorMessages('');
  };

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
            onClick={handleAddFolder}
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
