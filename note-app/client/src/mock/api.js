const h2DB = {
  folders: [
    { id: 'folder-1', name: 'Folder 1' },
    { id: 'folder-2', name: 'Folder 2' },
  ],
  files: [
    { id: 'file-1', name: 'File 1', content: '<p>File 1 content</p>', folderId: 'folder-1' },
    { id: 'file-2', name: 'File 2', content: '<p>File 2 content</p>', folderId: 'folder-1' },
    { id: 'file-3', name: 'File 3', content: '<p>File 3 content</p>', folderId: 'folder-2' },
  ],
};

function mockGet(url) {
  switch (url) {
    case '/api/folders':
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([...h2DB.folders]);
        }, 0);
      });
    // api/files/:folderId
    case url.match(/\/api\/files\/(.+)/) && url.match(/\/api\/files\/(.+)/)[0]:
      return new Promise((resolve) => {
        setTimeout(() => {
          const folderId = url.match(/\/api\/files\/(.+)/)[1];
          const files = h2DB.files.filter((file) => file.folderId === folderId);
          resolve({ files });
        }, 0);
      });
    case '/api/user-info':
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            loginUser: {
              id: '65dc94c978c40b47bdb9a9cb',
              email: 'nguyenanhtuan161095@gmail.com',
              displayName: 'Nguyễn Anh Tuấn',
              avatar:
                'https://lh3.googleusercontent.com/a/ACg8ocJ9tvDSWzAL4KftaSLKcAmI7OLHrGVdipO6XCB3SsQSuKA=s96-c',
              role: 'user',
              iat: 1716207408,
              exp: 1716293808,
            },
          });
        }, 0);
      });
    case '/logout':
      return new Promise((resolve) => {
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
          const folderNameExists = h2DB.folders.find((folder) => folder.name === body.name);
          if (folderNameExists) {
            resolve({
              data: null,
              errorMessage: 'Folder name already exists',
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
