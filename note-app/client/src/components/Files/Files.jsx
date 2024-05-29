import { useEffect } from 'react';
import Notes from '../Notes/Notes';
import { useFacade } from './hooks/useFacade';
import ListFiles from './ListFiles';

const Files = () => {
  const { files, folderId, noteId, newFile, navigate } = useFacade();

  useEffect(() => {
    if (!noteId) {
      if (files.length > 0) {
        navigate(`/${folderId}/${files[0].id}`);
      }
    } else {
      if (files.length > 0 && !files.find((file) => file.id === noteId)) {
        navigate(`/${folderId}/${files[0].id}`);
      } else if (!files.length) {
        navigate(`/${folderId}`);
      }
    }
  }, [folderId, noteId, files, navigate]);

  const handleAddFolder = () => {
    newFile(folderId);
  };

  return (
    <div className="flex">
      <div className="w-1/4 bg-stone-500 p-3 h-full overflow-y-auto min-h-[80vh] border-l-[1px] border-stone-100">
        <div
          className="flex items-center justify-between p-2 hover:bg-stone-400 hover:rounded-md cursor-pointer transition-all duration-300 ease-in-out border-solid border-[1px]
         border-stone-100 pb-2 w-full hover:text-stone-200 rounded-md mb-2 select-none"
          onClick={handleAddFolder}
        >
          <span className="text-stone-100">+ New file</span>
        </div>
        <ListFiles folderId={folderId} />
      </div>
      <div className="w-3/4">
        <Notes />
      </div>
    </div>
  );
};

export default Files;
