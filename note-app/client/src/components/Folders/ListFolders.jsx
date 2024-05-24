import { memo } from 'react';
import { ListItem } from '../common/List';
import useFacade from './hooks/useFacade';

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

export default ListFolders;
