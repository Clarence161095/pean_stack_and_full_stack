import { Button } from '@mui/material';
import { useRef } from 'react';
import InputControl from '../../../components/Input';
import List from '../../../components/List';
import Modal from '../../../components/Modal';
import useFacade from './+state/facade';
import { useState } from 'react';

const InitValid = {
  title: '',
  content: '',
  author: '',
  date: '',
};
export default function Announcement() {
  const [valid, setValidateForm] = useState(InitValid);
  const { list, post, isLoading, errorMessage = '', validateInput } = useFacade();
  const modal = useRef(null);
  function validateForm({ title, content, author, date }) {
    const _valid = { ...InitValid };
    if (title.split('@')[1].length < 3) {
      _valid.title = 'Title have to have at least 3 characters';
    }
    if (content.length < 10) {
      _valid.content = 'Content have to have at least 10 characters';
    }

    if (!/^[a-zA-Z]+$/.test(author)) {
      _valid.author = 'Author have to be a name';
    }
    if (new Date(date) < new Date()) {
      _valid.date = 'Date have to older than today';
    }
    if (_valid.title || _valid.content || _valid.author || _valid.date) {
      setValidateForm(_valid);
      return false;
    }
    return true;
  }
  function handleAdd(e) {
    e.preventDefault();
    const data = {
      title: e.target.title.value,
      content: e.target.content.value,
      author: e.target.author.value,
      date: e.target.date.value,
      isRead: false,
    };
    if (!validateForm(data)) {
      return;
    }
    // Validation data before post
    post([data, () => modal.current.close()]);
  }
  function isErrorFromServer() {
    return !isLoading && errorMessage && Object.values(valid).every((val) => val === '');
  }
  return (
    <section className="flex flex-col gap-2 w-full">
      <div className="flex items-center gap-2 mb-2">
        <h1 className="text-xl font-bold">Announcement</h1>
        <Button variant="contained" size="small" onClick={() => modal.current.showModal()}>
          + Add
        </Button>
      </div>
      {!errorMessage && isLoading && <p>Loading...</p>}
      {!validateInput && isLoading && <p>Loading...</p>}
      <Modal ref={modal}>
        <h1 className="text-xl font-bold mb-2">Add Announcement</h1>
        {isLoading && (
          <div className="fixed inset-0 bg-stone-800/90 z-10 flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-gray-900" />
            <p className="text-2xl font-bold text-gray-900">Loading....</p>
          </div>
        )}
        {isErrorFromServer() && <p className="text-red-500">{validateInput}</p>}
        <form onSubmit={handleAdd} className="flex flex-col gap-2">
          <InputControl
            type="email"
            id="title"
            placeholder="Type the title of the announcement"
            label="Title"
            required
            error={valid.title}
          />
          <InputControl
            type="textarea"
            id="content"
            placeholder="Type the content of the announcement"
            label="Content"
            required
            error={valid.content}
          />
          <InputControl
            type="text"
            id="author"
            placeholder="Type the author"
            label="Author"
            required
            valid={valid.author}
          />
          <InputControl
            type="date"
            id="date"
            label="Date"
            required
            defaultValue={new Date().toISOString().split('T')[0]}
            error={valid.date}
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
