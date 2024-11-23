import React, { useState } from 'react';
import { mockRegisterUser } from '../api/mockApi';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Destructure formData
  const { username, email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError('All fields are required!');
      return;
    }

    setError('');
    setSuccess('');

    try {
      const response = await mockRegisterUser(formData);
      setSuccess(response.message); // Show success message
    } catch (err) {
      setError(err.message); // Show error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username} // Directly use destructured variable
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email} // Directly use destructured variable
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password} // Directly use destructured variable
          onChange={handleChange}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
