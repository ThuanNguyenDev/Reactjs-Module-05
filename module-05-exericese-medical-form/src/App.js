import React, { useState } from 'react';
import { Formik } from 'formik';
import './App.css';



function App() {

  const SEX_LIST = [{ label: 'Nam', value: 'male' }, { label: 'Nữ', value: 'female' }];

  const [form, setForm] = useState({});
  
  const handleChange = (event) => {
    const value = event.target.type === 'checkbox' ? !form[event.target.name] : event.target.value;
    setForm({ ...form, [event.target.name]: value });
  }

  const handleValidate = () => {
    let errors = {};

    if (!form.name) {
      errors.name = 'Required';
    }

    if (!form.number) {
      errors.number = 'Required';
    }

    return errors;
  }

  const handleSubmit = () => {
    const errors = handleValidate();
    if (Object.keys(errors).length === 0) {
      alert('Form submitted successfully');
      // You can send the form data to a server or perform other actions here
    }
  }

  return (
    <div>
      <h1>Book Form</h1>
      <form>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={form.name} onChange={handleChange} />
          {form.name && <div className="error">{form.name}</div>}
        </div>
        <div>
          <label>Number: </label>
          <input type="text" name="number" value={form.number} onChange={handleChange} />
          {form.number && <div className="error">{form.number}</div>}
        </div>
        {/* Add more form fields and error messages as needed */}
        <div>
          <label>Sex: </label>
          {SEX_LIST.map((item) => (
            <label key={item.value}>
              <input type="radio" name="sex" value={item.value} onChange={handleChange} checked={form.sex === item.value} /> {item.label}
            </label>
          ))}
        </div>
        <div>
          <label>Is Married: </label>
          <input type="checkbox" name="isMarried" onChange={handleChange} checked={form.isMarried} />
        </div>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;