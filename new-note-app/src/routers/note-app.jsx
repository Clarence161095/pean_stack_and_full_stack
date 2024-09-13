import { EditOutlined } from '@ant-design/icons';
import ErrorElement from '../components/ErrorElement';
import NoteApps, { noteAppLoader } from '../pages/notes-app';
import Folder, { folderLoader } from '../pages/notes-app/folder';
import CreateFolder, { createFolderAction } from '../pages/notes-app/folder/create';
import DeleteFolder, { deleteFolderAction } from '../pages/notes-app/folder/delete';
import Note, { noteLoader } from '../pages/notes-app/folder/note';
import CreateNote, { createNoteAction } from '../pages/notes-app/folder/note/create';
import UpdateFolder, { updateFolderAction } from '../pages/notes-app/folder/update';
import UpdateNote from '../pages/notes-app/folder/note/update';
import DeleteNote from '../pages/notes-app/folder/note/delete';

const noteAppRoute = [
  {
    path: 'folders',
    errorElement: <ErrorElement />,
    menu: {
      key: 'folders',
      icon: <EditOutlined />,
      label: 'Note App',
    },
    children: [
      {
        index: true,
        element: <NoteApps />,
        loader: noteAppLoader,
      },
      {
        path: ':folderId',
        element: <NoteApps />,
        loader: noteAppLoader,
        children: [
          {
            path: 'delete',
            element: <DeleteFolder />,
            loader: folderLoader,
            action: deleteFolderAction,
          },
        ],
      },
      {
        path: 'create',
        element: <CreateFolder />,
        action: createFolderAction,
      },
      {
        path: ':folderId',
        element: <Folder />,
        loader: folderLoader,
        children: [
          {
            path: 'create',
            element: <CreateNote />,
            action: createNoteAction,
          },
        ],
      },
      {
        path: ':folderId',
        children: [
          {
            index: true,
            element: <Folder />,
            loader: folderLoader,
          },
          {
            path: 'update',
            element: <UpdateFolder />,
            loader: folderLoader,
            action: updateFolderAction,
          },
          {
            path: ':noteId',
            element: <Folder />,
            loader: folderLoader,
            children: [
              {
                index: true,
                element: <Note />,
                loader: noteLoader,
              },
              {
                path: 'update',
                element: <UpdateNote />,
                loader: noteLoader,
              },
              {
                path: 'delete',
                element: <DeleteNote />,
                loader: noteLoader,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default noteAppRoute;
