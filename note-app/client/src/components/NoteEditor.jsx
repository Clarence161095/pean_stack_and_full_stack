import { EditorState, convertToRaw, convertFromHTML, ContentState } from 'draft-js';
import { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const NoteEditor = ({
  initialContent = '<p>Initial Note content...</p>',
  onChangeContent = () => {},
}) => {
  const [editorState, setEditorState] = useState(() => {
    return EditorState.createEmpty();
  });

  const [rawHTML, setRawHTML] = useState(initialContent);

  useEffect(() => {
    const blocksFromHTML = convertFromHTML(initialContent);
    const state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap,
    );
    setEditorState(EditorState.createWithContent(state));
  }, [initialContent]);

  useEffect(() => {
    onChangeContent(rawHTML);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rawHTML]);

  if (!editorState) {
    return null;
  }

  const handleOnChange = (e) => {
    setEditorState(e);
    setRawHTML(draftToHtml(convertToRaw(e.getCurrentContent())));
  };

  return (
    <div className="editor">
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={handleOnChange}
      />
    </div>
  );
};

export default NoteEditor;
