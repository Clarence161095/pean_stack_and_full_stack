import { Button, Spin } from 'antd';
import { Suspense } from 'react';
import { Await, defer, Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import Item from '../../components/notes/item';
import { get } from '../../utils/api';

const Notes = () => {
  const { events } = useLoaderData();
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
      <Suspense
        fallback={
          <Spin className="flex justify-center items-center h-full scale-[2] mt-36" size="large" percent="auto"></Spin>
        }
      >
        <Await resolve={events}>
          {(folders) => {
            if (!folders || folders.length === 0) {
              return <div className="flex justify-center items-center h-full">Don&apos;t have any folder</div>;
            }

            return (
              <div className="flex flex-wrap gap-10 py-4 max-h-[calc(100vh-200px)] overflow-auto">
                {folders.map((folder, index) => (
                  <Item key={folder.id || index} name={folder.name} description={folder.description} />
                ))}
              </div>
            );
          }}
        </Await>
      </Suspense>
      <Outlet />
    </>
  );
};

export default Notes;

export const loadEvents = async () => {
  const response = await get('/folders');
  if (!response.ok) {
    throw new Error('Failed to fetch folders');
  }
  return response.json();
};

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
