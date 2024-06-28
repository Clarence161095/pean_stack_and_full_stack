import { EditOutlined } from '@ant-design/icons';
import Notes from '../pages/notes';
import Folder from '../pages/notes/folder';
import Note from '../pages/notes/folder/note';

const noteRoute = [
  {
    path: 'notes',
    menu: {
      key: 'notes',
      icon: <EditOutlined />,
      label: 'List Note',
    },
    children: [
      {
        index: true,
        element: <Notes />,
      },
      {
        path: ':folderId',
        children: [
          {
            index: true,
            element: <Folder />,
          },
          {
            path: 'create',
            element: <h1>This is Folder New page</h1>,
          },
          {
            path: 'update',
            element: <h1>This is Folder Edit page</h1>,
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
