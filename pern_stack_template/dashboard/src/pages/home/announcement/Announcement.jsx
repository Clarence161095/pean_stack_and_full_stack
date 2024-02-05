import { Button } from '@mui/material';
import { useRef } from 'react';
import InputControl from '../../../components/Input';
import List from '../../../components/List';
import Modal from '../../../components/Modal';
import useFacade from './+state/facade';

export default function Announcement() {
  const { list, post, isLoading, errorMessage = '', validateData } = useFacade();
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
          <p className="text-red-500">{validateData}</p>
          <InputControl
            type="textarea"
            id="content"
            placeholder="Type the content of the announcement"
            label="Content"
          />
          <p className="text-red-500">{validateData}</p>
          <InputControl type="text" id="author" placeholder="Type the author" label="Author" />
          <p className="text-red-500">{validateData}</p>
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
      {!validateData ? '' : <p className="text-red-500">{errorMessage}</p>}
    </section>
  );
}
