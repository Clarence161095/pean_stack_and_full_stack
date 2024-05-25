// Database table folder
const data = {
  folders: [
    {
      id: 'folder-1',
      name: 'Folder 1',
    },
    {
      id: 'folder-2',
      name: 'Folder 2',
    },
    {
      id: 'folder-3',
      name: 'Folder 3',
    },
  ],
};
//Backend
// thong qua ham get se switch duoc qua lai voi host truyen tu ben phia utils/api sang
// chu y , ham get nay chi la gia lap ham get ben phia utils/api nhung chuc nang 99%
function mockGet(url) {
  switch (url) {
    case '/api/folders': // localhost:3000/api...check env
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([...data]); // url = folder will be get all current folders from db
        }, 300);
      });
    case '/api/user-info':
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ loginUser: { id: 1, name: 'John Doe' } }); // TODO: import cookies data
        }, 0);
      });
    case '/logout':
      return new Promise((resolve) => {
        // solve url logout
        setTimeout(() => {
          resolve([]);
        }, 0);
      });
    default:
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([]);
        }, 0);
      });
  }
}

function mockPost(url, body) {
  console.log('myFetch', url, body);
  switch (url) {
    default:
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([]);
        }, 0);
      });
  }
}

export { mockGet, mockPost };
