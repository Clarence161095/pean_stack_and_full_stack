import { Button } from 'antd';
import { defer, Outlet, useNavigate } from 'react-router-dom';
import LazyLoading from '../../components/LazyLoading';
import Item from '../../components/notes/item';
import { get } from '../../utils/api';

const Notes = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex gap-2 mb-4">
        <h1 className="text-2xl font-semibold">List Folders</h1>
        <div className="mb-4">
          <Button type="primary" onClick={() => navigate('folders/create')}>
            Create
          </Button>
        </div>
      </div>
      <LazyLoading>
        {(folders) => {
          if (!folders || folders.length === 0) {
            return <div className="flex justify-center items-center h-full">Don&apos;t have any folder</div>;
          }

          return (
            <div className="flex flex-wrap gap-10 py-4 max-h-[calc(100vh-200px)] overflow-auto">
              {folders.map((folder, index) => (
                <Item
                  showClick={() => navigate(folder.id)}
                  editClick={() => navigate(folder.id + '/update')}
                  deleteClick={() => navigate(folder.id + '/delete')}
                  key={folder.id || index}
                  id={folder.id}
                  name={folder.name}
                  description={folder.description}
                />
              ))}
            </div>
          );
        }}
      </LazyLoading>
      <Outlet />
    </>
  );
};

export default Notes;

export const loadFolders = async () => {
  const response = await get('/folders');
  if (!response.ok) {
    throw new Error('Failed to fetch folders');
  }
  return response.json();
};

export const loader = () => {
  return defer({
    event: loadFolders(),
  });
};
