import { Outlet, useParams } from 'react-router-dom';

function Folders() {
  const { folderId } = useParams();
  return (
    <div>
      <h1>List Folder</h1>
      <p>Folder ID: {folderId}</p>
      <Outlet />
    </div>
  );
}

export default Folders;
