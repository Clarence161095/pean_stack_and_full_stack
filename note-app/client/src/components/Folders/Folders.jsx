import { Outlet, useNavigate, useParams } from 'react-router-dom';
import Item from '../common/Item';
import List, { ListItem } from '../common/List';

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

const Folders = () => {
  const { folderId } = useParams();
  const navigate = useNavigate();

  const isFolderId = folderId !== undefined;

  return (
    <div className="flex">
      <div className="w-1/4 bg-stone-500 p-3 h-full overflow-y-auto min-h-[80vh]">
        <h1 className="text-2xl font-bold mb-4 text-stone-100 border-b-2 border-stone-100 pb-2 w-full text-center">
          Folders
        </h1>
        {/* Add new folder */}
        <div
          className="flex items-center justify-between p-2 hover:bg-stone-400 hover:rounded-md cursor-pointer transition-all duration-300 ease-in-out border-solid border-[1px]
         border-stone-100 pb-2 w-full hover:text-stone-200 rounded-md mb-2"
        >
          <span className="text-stone-100">+ Add new folder</span>
        </div>
        {/* <ul className="space-y-2 text-stone-100">
          {mockFolders.map((folder) => (
            <Item
              key={folder.id}
              text={folder.name}
              isActive={isFolderId && folderId === folder.id}
              className="p-2 hover:text-stone-200 cursor-pointer transition-all duration-300 ease-in-out border-b-2 border-stone-100 pb-2 w-full hover:bg-stone-400 hover:rounded-md"
              activeClassName="bg-stone-400 rounded-md"
              onClick={() => navigate(`/${folder.id}`)}
            />
          ))}
        </ul>
        <List
          className="space-y-2 text-stone-100"
          list={mockFolders}
          setItem={(item) => (
            <Item
              key={item.id}
              text={item.name}
              isActive={isFolderId && folderId === item.id}
              className="p-2 hover:text-stone-200 cursor-pointer transition-all duration-300 ease-in-out border-b-2 border-stone-100 pb-2 w-full hover:bg-stone-400 hover:rounded-md"
              activeClassName="bg-stone-400 rounded-md"
              onClick={() => navigate(`/${item.id}`)}
            />
          )}
        /> */}
        <ListItem
          className="space-y-2 text-stone-100"
          list={mockFolders}
          activeId={folderId}
          itemClass="p-2 hover:text-stone-200 cursor-pointer transition-all duration-300 ease-in-out border-b-2 border-stone-100 pb-2 w-full hover:bg-stone-400 hover:rounded-md"
          itemActiveClass="bg-stone-400 rounded-md"
          onClickItem={(id) => navigate(`/${id}`)}
        />
      </div>
      <div className="w-3/4">
        {folderId && <h1>Folder {folderId}</h1>}
        <Outlet />
      </div>
    </div>
  );
};

export default Folders;
