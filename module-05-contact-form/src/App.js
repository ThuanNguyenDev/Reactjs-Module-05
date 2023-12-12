import React, { useState } from 'react';

const REGEX = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

function App() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });

    setErrors({ ...errors, [name]: '' });
  };

  const handleValidate = () => {
    const newErrors = {};

    if (!form.name) {
      newErrors.name = 'Required';
    }

    if (!form.email) {
      newErrors.email = 'Required';
    } else if (!REGEX.email.test(form.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!form.phone) {
      newErrors.phone = 'Required';
    }

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = handleValidate();
    
    if (Object.keys(validationErrors).length === 0) {
      alert('Liên hệ đã được thêm thành công!');
    }
  };

  return (
    <div>
      <h1>Liên hệ</h1>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={form.name || ''}
          onChange={handleChange}
        />
        {errors.name && <div className="error">{errors.name}</div>}
      </div>
      <div>
        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={form.email || ''}
          onChange={handleChange}
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div>
        <label>Phone: </label>
        <input
          type="text"
          name="phone"
          value={form.phone || ''}
          onChange={handleChange}
        />
        {errors.phone && <div className="error">{errors.phone}</div>}
      </div>
      <button type="button" onClick={handleSubmit}>
        Thêm Liên hệ
      </button>
    </div>
  );
}

export default App;
