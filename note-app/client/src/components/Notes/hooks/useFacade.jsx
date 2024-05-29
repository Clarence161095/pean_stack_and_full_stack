import useInitNote from './useInitNote';

const useFacade = () => {
  const { noteId, initialContent } = useInitNote();

  return {
    initialContent,
    updateContent: (noteId, content) => {
      console.log('Updating content:', noteId, content);
    },
    noteId,
  };
};

export default useFacade;
