const data = {
  folders: [
    { id: "folder-1", name: "Folder 1" },
    { id: "folder-2", name: "Folder 2" },
  ],
  files: [
    {
      id: "file-1",
      name: "File 1",
      content: "<p>File 1 content</p>",
      folderId: "folder-1",
    },
    {
      id: "file-2",
      name: "File 2",
      content: "<p>File 2 content</p>",
      folderId: "folder-1",
    },
    {
      id: "file-3",
      name: "File 3",
      content: "<p>File 3 content</p>",
      folderId: "folder-2",
    },
  ],
};

const file = data.files.find((file) => file.id === "file-1");
file.content = "<p>Tuan</p>";
console.log(file);