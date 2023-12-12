import React, { useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({});
  const [indexSelected, setIndexSelected] = useState(-1);
  const [errors, setErrors] = useState({ title: '', number: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });

    // Reset errors for the field being edited
    setErrors({ ...errors, [name]: '' });
  };

  const handleSelect = (book, index) => {
    setForm(book);
    setIndexSelected(index);
  };

  const handleDelete = (index) => {
    const newBooks = [...books];
    newBooks.splice(index, 1);
    setBooks(newBooks);
  };

  const handleSubmit = () => {
    const schema = {
      title: /^[A-Za-z0-9 ]{1,}$/, // Your title regex here
      number: /^[0-9]{1,}$/, // Your number regex here
    };

    const newErrors = {};

    // Validate form inputs with regex
    for (const field in schema) {
      if (!schema[field].test(form[field])) {
        newErrors[field] = 'Invalid';
      }
    }

    if (Object.keys(newErrors).length === 0) {
      const newBooks = JSON.parse(JSON.stringify(books));

      if (indexSelected > -1) {
        newBooks.splice(indexSelected, 1, form);
      } else {
        newBooks.push(form);
      }

      setBooks(newBooks);
      setForm({});
      setIndexSelected(-1);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <h1>Book Form</h1>
      <div>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          value={form.title || ''}
          onChange={handleChange}
        />
        {errors.title && <div className="error">{errors.title}</div>}
      </div>
      <div>
        <label>Number: </label>
        <input
          type="text"
          name="number"
          value={form.number || ''}
          onChange={handleChange}
        />
        {errors.number && <div className="error">{errors.number}</div>}
      </div>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
      <h2>Book List</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.title} - {book.number}
            <button type="button" onClick={() => handleSelect(book, index)}>
              Edit
            </button>
            <button type="button" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
