import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, name: 'Ім\'я є обов\'язковим полем' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Електронна пошта є обов\'язковим полем' }));
    } else if (!emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Введіть коректний формат електронної пошти' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    }

    const phoneRegex = /^\d{12}$/;
    if (!formData.phone.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, phone: 'Телефон є обов\'язковим полем' }));
    } else if (!phoneRegex.test(formData.phone)) {
      setErrors((prevErrors) => ({ ...prevErrors, phone: 'Введіть коректний телефон (тільки цифри та довжина 12)' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
    }
  };

  return (
    <div className="App">
      <h1>Форма</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Ім'я:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="email">Електронна пошта:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="phone">Телефон:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <button type="submit">Відправити</button>
      </form>
    </div>
  );
};

export default App;