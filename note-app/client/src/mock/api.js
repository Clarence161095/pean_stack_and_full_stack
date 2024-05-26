// Database table folder
const h2DB = {
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
// so khai cua DB H2 luu tren RAM, kha giong mock db

//Backend
// thong qua ham get se switch duoc qua lai voi host truyen tu ben phia utils/api sang
// chu y , ham get nay chi la gia lap ham get ben phia utils/api nhung chuc nang 99%
function mockGet(url) {
  switch (url) {
    case '/api/folders': // localhost:3000/api...check env
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([...h2DB.folders]); // url = folder will be get all current folders from db h2DB
        }, 300);
      });
    case '/api/user-info':
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            loginUser: {
              id: '',
              email: '',
              displayName: '',
              avatar: '',
              role: '',
              int: '',
              exp: '',
            },
          }); // import data from cookies to here
        }, 0);
      });
    case '/logout':
      return new Promise((resolve) => {
        // solve url logout
        setTimeout(() => {
          resolve({});
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
  console.log('mockPost', url, body);
  switch (url) {
    case '/sso-login':
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({});
        }, 0);
      });
    case '/api/folders':
      return new Promise((resolve) => {
        setTimeout(() => {
          const folderNameExist = h2DB.folders.find((folder) => folder.name === body.name);
          if (folderNameExist) {
            resolve({
              data: null,
              errorMessage: 'Folder name exist',
            });
          } else {
            const newFolder = {
              id: `folder-${h2DB.folders.length + 1}`,
              name: body.name,
            };
            h2DB.folders.push(newFolder);
            resolve({ data: newFolder });
          }
        }, 0);
      });
    default:
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: null,
            errorMessage: 'Not yet implemented',
          });
        }, 0);
      });
  }
}

export { mockGet, mockPost };
