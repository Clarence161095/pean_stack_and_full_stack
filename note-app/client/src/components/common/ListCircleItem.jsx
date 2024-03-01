import { ListItem } from './List';

const ListCircleItem = ({ list, activeId, onClickItem }) => {
  return (
    <ListItem
      ulClassName="flex p-0 m-0 list-none cursor-pointer text-stone-100 text-lg font-bold hover:text-stone-200"
      list={list.map((item) => ({
        ...item,
        name: item.name[0].toUpperCase(),
      }))}
      activeId={activeId}
      liClass="p-1 mx-0 rounded-full bg-stone-400 hover:bg-stone-500 transition-all duration-300 ease-in-out text-center w-10 h-10 flex items-center justify-center border-solid border-[1px] border-stone-100 hover:border-stone-200 rounded-full shadow-md hover:shadow-lg cursor-pointer"
      liActiveClass="bg-purple-500 border-stone-200 shadow-lg hover:shadow-md text-stone-200 hover:bg-stone-400 hover:border-stone-300"
      onClickItem={onClickItem}
    />
  );
};

export default ListCircleItem;
