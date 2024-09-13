import { defer, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import LazyLoading from '../../../../components/LazyLoading';
import { get } from '../../../../utils/api';
import AntdModal from '../../../../components/antd/Model';

const Note = () => {
  const { folderId } = useParams();
  const { note } = useLoaderData();
  const navigate = useNavigate();

  return (
    <>
      <LazyLoading event={note}>
        {(note) => {
          if (!note) {
            return <div className="flex justify-center items-center h-full">Don&apos;t have any note</div>;
          }
          return (
            <AntdModal
              open={true}
              closable={true}
              onCancel={() => navigate('/folders/' + folderId)}
              footer={null}
              width={800}
            >
              <h1 className="text-2xl font-semibold">Note Detail</h1>
              <div className="flex flex-col space-y-2 p-4 border border-gray-200 rounded-md shadow gap-2 mt-2 hover:shadow-lg transition duration-300 ease-in-out">
                <h2 className="text-lg font-semibold">{note.title}</h2>
                <div className="text-sm text-gray-500" dangerouslySetInnerHTML={{ __html: note.content }}></div>
              </div>
            </AntdModal>
          );
        }}
      </LazyLoading>
    </>
  );
};

export default Note;

const loadNoteInfo = async (noteId) => {
  const response = await get(`/notes/${noteId}`);
  if (!response.ok) {
    throw new Error("Can't load note");
  }
  return response.json();
};

export const noteLoader = ({ params }) => {
  const noteId = params.noteId;
  return defer({
    note: loadNoteInfo(noteId),
  });
};
