import { ListItem } from '../common/List';
import { useFacade } from './hooks/useFacade';

const ListFiles = () => {
  const { files, folderId, noteId, navigate } = useFacade();

  return (
    <>
      {!files.length && <div className="text-stone-100 text-center">No files found</div>}
      <ListItem
        ulClassName="w-full p-0 m-0 list-none cursor-pointer text-stone-100 text-lg font-bold hover:text-stone-200"
        list={files}
        activeId={noteId}
        liClass="p-2 hover:bg-stone-400 hover:rounded-md transition-all duration-300 ease-in-out border-solid border-[1px] border-stone-100 pb-2 w-full rounded-md mb-2 select-none"
        liActiveClass="bg-stone-400 rounded-md transition-all duration-300 ease-in-out border-solid border-[1px] border-stone-100 pb-2 w-full rounded-md mb-2"
        onClickItem={(id) => navigate(`/${folderId}/${id}`)}
      />
    </>
  );
};

export default ListFiles;
