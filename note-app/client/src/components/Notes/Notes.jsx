import _ from 'lodash';
import { useCallback, useRef } from 'react';
import NoteEditor from './NoteEditor';
import useFacade from './hooks/useFacade';

function Notes() {
  const { noteId, initialContent, updateContent } = useFacade();
  const debouncedUpdateContent = useRef(
    _.debounce((id, content) => {
      updateContent(id, content);
    }, 300),
  ).current;

  const onChangeContent = useCallback(
    (content) => {
      debouncedUpdateContent(noteId, content);
    },
    [noteId, debouncedUpdateContent],
  );

  return <NoteEditor initialContent={initialContent} onChangeContent={onChangeContent} />;
}

export default Notes;
