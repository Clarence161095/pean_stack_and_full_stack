import { Outlet, useParams, useNavigate } from 'react-router-dom';

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

function Folders() {
  const { folderId } = useParams();

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
        <ul className="space-y-2 text-stone-100">
          {mockFolders.map((folder) => (
            <FolderItem
              key={folder.id}
              folder={folder}
              isActive={isFolderId && folderId === folder.id}
            />
          ))}
        </ul>
      </div>
      <div className="w-3/4">
        {folderId && <h1>Folder {folderId}</h1>}
        <Outlet />
      </div>
    </div>
  );
}

const FolderItem = ({ folder, isActive }) => {
  const navigate = useNavigate();
  let className =
    'p-2 hover:text-stone-200 cursor-pointer transition-all duration-300 ease-in-out border-b-2 border-stone-100 pb-2 w-full hover:bg-stone-400 hover:rounded-md';

  if (isActive) {
    className += ' bg-stone-400 rounded-md';
  }

  return (
    <li key={folder.id} className={className} onClick={() => navigate(`/${folder.id}`)}>
      {folder.name}
    </li>
  );
};

export default Folders;
