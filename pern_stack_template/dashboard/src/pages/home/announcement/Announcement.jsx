import { Button } from '@mui/material';
import { useRef } from 'react';
import InputControl from '../../../components/Input';
import List from '../../../components/List';
import Modal from '../../../components/Modal';
import useFacade from './+state/facade';

const MOCK_DATA = [
  {
    id: '1',
    title: 'The first announcement',
    content: 'This is the first announcement',
    author: 'John Doe',
    date: '2021-10-10',
    isRead: true,
  },
  {
    id: '2',
    title: 'The second announcement',
    content: 'This is the second announcement',
    author: 'John Doe',
    date: '2021-10-10',
    isRead: false,
  },
  {
    id: '3',
    title: 'The third announcement',
    content: 'This is the third announcement',
    author: 'John Doe',
    date: '2021-10-10',
    isRead: false,
  },
  {
    id: '4',
    title: 'The fourth announcement',
    content: 'This is the fourth announcement',
    author: 'John Doe',
    date: '2021-10-10',
    isRead: true,
  },
];

export default function Announcement() {
  const { list = MOCK_DATA, post, isLoading = false, errorMessage = '' } = useFacade();
  const modal = useRef(null);

  function handleAdd(e) {
    e.preventDefault();
    const data = {
      title: e.target.title.value,
      content: e.target.content.value,
      author: e.target.author.value,
      date: e.target.date.value,
      isRead: false,
    };
    // Validation data before post
    modal.current.close();
    post(data);
  }

  return (
    <section className="flex flex-col gap-2 w-full">
      <div className="flex items-center gap-2 mb-2">
        <h1 className="text-xl font-bold">Announcement</h1>
        <Button variant="contained" size="small" onClick={() => modal.current.showModal()}>
          + Add
        </Button>
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {!errorMessage && isLoading && <p>Loading...</p>}
      <Modal ref={modal}>
        <h1 className="text-xl font-bold mb-2">Add Announcement</h1>
        <form onSubmit={handleAdd} className="flex flex-col gap-2">
          <InputControl
            type="text"
            id="title"
            placeholder="Type the title of the announcement"
            label="Title"
          />
          <InputControl
            type="textarea"
            id="content"
            placeholder="Type the content of the announcement"
            label="Content"
          />
          <InputControl type="text" id="author" placeholder="Type the author" label="Author" />
          <InputControl
            type="date"
            id="date"
            label="Date"
            defaultValue={new Date().toISOString().split('T')[0]}
          />
          <Button variant="contained" type="submit" size="medium">
            + Add
          </Button>
        </form>
      </Modal>
      {!errorMessage && !isLoading && <List list={list} />}
    </section>
  );
}
