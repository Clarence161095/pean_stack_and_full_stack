import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ListFiles from '../Files/Files';
import NoteEditor from './NoteEditor';

function Notes() {
  const { folderId, noteId } = useParams();
  let initialContent = `<p></p>`;

  useEffect(() => {
    console.log('Note ID:', noteId);
    // get initialContent from server
  }, [noteId]);

  const onChangeContent = (content) => {
    console.log('Content:', content);
  };

  return (
    <div className="flex">
      <div className="w-1/4">
        <ListFiles folderId={folderId} />
      </div>
      <div className="w-3/4">
        <NoteEditor initialContent={initialContent} onChangeContent={onChangeContent} />
      </div>
    </div>
  );
}

export default Notes;
