import useInitNote from './useInitNote';

const useFacade = () => {
  const { folderId, noteId, initialContent } = useInitNote();

  const updateContentHandler = (noteId, content) => {
    // TODO: Implement update content
    console.log('Updating content:', folderId, noteId, content);
  };

  return {
    initialContent,
    updateContent: updateContentHandler,
    noteId,
  };
};

export default useFacade;
