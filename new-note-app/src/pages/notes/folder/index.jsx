import { Button } from 'antd';
import { defer, Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import LazyLoading from '../../../components/LazyLoading';
import { get } from '../../../utils/api';

const Folder = () => {
  const { event } = useLoaderData();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-2xl font-semibold">Folder Detail</h1>
      <LazyLoading event={event}>
        {(folder) => {
          if (!folder) {
            return <div className="flex justify-center items-center h-full">Don&apos;t have any folder</div>;
          }
          return (
            <>
              <div className="flex flex-col space-y-2 p-4 border border-gray-200 rounded-md shadow gap-2 mt-2 hover:shadow-lg transition duration-300 ease-in-out">
                <h2 className="text-lg font-semibold">Folder: {folder.name}</h2>
                <div className="text-gray-500">
                  Description:{' '}
                  {
                    <div
                      className="rich-text mt-1 border border-gray-200 rounded-md p-2 max-h-[30vh] overflow-auto"
                      dangerouslySetInnerHTML={{ __html: folder.description }}
                    />
                  }
                </div>
                <div className="flex gap-2 mb-4">
                  <h1 className="text-2xl font-semibold">List Notes</h1>
                  <div className="mb-4">
                    <Button type="primary" onClick={() => navigate('folders/create')}>
                      Create Note
                    </Button>
                  </div>
                </div>
                {/* <LazyLoading>
                  {(folders) => {
                    if (!folders || folders.length === 0) {
                      return <div className="flex justify-center items-center h-full">Don&apos;t have any folder</div>;
                    }
                    return (
                      <div className="flex flex-wrap gap-10 py-4 max-h-[calc(100vh-200px)] overflow-auto">
                        {folders.map((folder, index) => (
                          <Item
                            showClick={() => navigate('/notes/' + folder.id)}
                            editClick={() => navigate('/notes/' + folder.id + '/update')}
                            deleteClick={() => navigate('/notes/' + folder.id + '/delete')}
                            key={folder.id || index}
                            id={folder.id}
                            name={folder.name}
                            description={folder.description}
                          />
                        ))}
                      </div>
                    );
                  }}
                </LazyLoading> */}
                <Outlet />

                <div className="text-right">
                  <Button type="default" onClick={() => navigate('/notes')}>
                    Back
                  </Button>
                </div>
              </div>
            </>
          );
        }}
      </LazyLoading>
    </>
  );
};

export default Folder;

const loadFolderInfo = async (folderId) => {
  const response = await get(`/folders/${folderId}`);
  if (!response.ok) {
    throw new Error("Can't load folder");
  }
  return response.json();
};

// const loadListNotes = async (folderId) => {
//   const response = await get(`/folders/${folderId}/events`);
//   if (!response.ok) {
//     throw new Error("Can't load events");
//   }
//   return response.json();
// };

export const loader = ({ params }) => {
  const folderId = params.folderId;
  return defer({
    event: loadFolderInfo(folderId),
    // events: loadListNotes(folderId),
  });
};
