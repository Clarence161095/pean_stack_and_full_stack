import { useParams } from 'react-router-dom';
import NoteEditor from './NoteEditor';
import { useEffect } from 'react';

function Notes() {
  const { noteId } = useParams();
  let initialContent = `<p>Initial Note content from server... with ID: ${noteId}</p>`;

  useEffect(() => {
    console.log('Note ID:', noteId);
    // get initialContent from server
  }, [noteId]);

  return (
    <div>
      <h1>Notes</h1>
      <p>Note ID: {noteId}</p>
      <NoteEditor initialContent={initialContent} />
    </div>
  );
}

export default Notes;
