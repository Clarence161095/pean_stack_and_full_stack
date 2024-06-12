import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectFiles } from '../../Files/FilesState';

const useInitNote = () => {
  const { data: files } = useSelector(selectFiles);
  const { folderId, noteId } = useParams();
  const [initialContent, setInitialContent] = useState('');

  useEffect(() => {
    if (noteId) {
      const file = files.find((file) => file.id === noteId);
      if (file && file.content) {
        setInitialContent(file.content);
      }
    }
  }, [files, noteId]);

  return {
    initialContent,
    noteId,
    folderId
  };
};

export default useInitNote;
