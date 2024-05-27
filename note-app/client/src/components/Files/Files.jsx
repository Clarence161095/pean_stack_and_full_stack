import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ListItem } from '../common/List';

const useFacade = () => {
  const { folderId, noteId } = useParams();
  const files = [
    { id: 'file-1', name: 'File 1' },
    { id: 'file-2', name: 'File 2' },
    { id: 'file-3', name: 'File 3' },
  ];

  return { files, folderName: 'Folder 1', noteId, folderId };
};

const ListFiles = () => {
  const { files, folderId, noteId } = useFacade();
  const navigate = useNavigate();

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

  return (
    <div className="flex flex-col bg-stone-500 p-3 h-full overflow-y-auto min-h-[80vh] border-solid border-l-[1px] border-stone-100">
      {!files.length && <div className="text-stone-100 text-center">No files found</div>}
      <ListItem
        ulClassName="w-full p-0 m-0 list-none cursor-pointer text-stone-100 text-lg font-bold hover:text-stone-200"
        list={files}
        activeId={noteId}
        liClass="p-2 hover:bg-stone-400 hover:rounded-md transition-all duration-300 ease-in-out border-solid border-[1px] border-stone-100 pb-2 w-full rounded-md mb-2 select-none"
        liActiveClass="bg-stone-400 rounded-md transition-all duration-300 ease-in-out border-solid border-[1px] border-stone-100 pb-2 w-full rounded-md mb-2"
        onClickItem={(id) => navigate(`/${folderId}/${id}`)}
      />
    </div>
  );
};

export default ListFiles;
