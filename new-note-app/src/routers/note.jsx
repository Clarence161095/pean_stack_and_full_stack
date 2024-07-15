import { EditOutlined } from '@ant-design/icons';
import Notes, { loader as notesLoader } from '../pages/notes';
import Folder, { loader as folderLoader } from '../pages/notes/folder';
import CreateFolder, { action as createFolderAction } from '../pages/notes/folder/create';
import Note from '../pages/notes/folder/note';
import UpdateFolder from '../pages/notes/folder/update';

const noteRoute = [
  {
    path: 'notes',
    menu: {
      key: 'notes',
      icon: <EditOutlined />,
      label: 'Notes',
    },
    children: [
      {
        index: true,
        element: <Notes />,
        loader: notesLoader,
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
            path: 'create',
            element: <CreateFolder />,
            action: createFolderAction,
          },
          {
            path: 'update',
            element: <UpdateFolder />,
            // loader với id từ params
            // action với nội dụng form
          },
          {
            path: 'delete',
            element: <h1>This is Folder Delete page</h1>,
          },
          {
            path: ':noteId',
            children: [
              {
                index: true,
                element: <Note />,
              },
              {
                path: 'create',
                element: <h1>This is Note New page</h1>,
              },
              {
                path: 'update',
                element: <h1>This is Note Edit page</h1>,
              },
              {
                path: 'delete',
                element: <h1>This is Note Delete page</h1>,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default noteRoute;
