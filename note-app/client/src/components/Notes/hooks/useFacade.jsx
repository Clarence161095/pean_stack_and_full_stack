import { post } from '../../../configs/api';
import useInitNote from './useInitNote';

const EMPTY_CONTENT = ['', '<p></p>', '<p></p>\n'];

const useFacade = () => {
  const { folderId, noteId, initialContent } = useInitNote();

  const updateContentHandler = (noteId, content) => {
    console.log('Updating content:', folderId, noteId, content);
    if (content || !EMPTY_CONTENT.includes(content)) {
      post('/api/update-note', { folderId, noteId, content }).then((res) => {
        // TODO: Handle the response of the note update
        if (res.data) {
          console.log('Update successful');
        } else {
          console.error('Update failed:', res.errorMessage);
        }
      });
    }
  };

  return {
    initialContent,
    updateContent: updateContentHandler,
    noteId,
  };
};

export default useFacade;
