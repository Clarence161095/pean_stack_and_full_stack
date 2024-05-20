const data = {
  folders: [
    { id: 'folder-1', name: 'Folder 1' },
    { id: 'folder-2', name: 'Folder 2' },
  ],
};

function mockGet(url) {
  switch (url) {
    case '/api/folders':
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([...data.folders]);
        }, 300);
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
  console.log(url, body);
  switch (url) {
    case '/sso-login':
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

export { mockGet, mockPost };
