import React, { useState } from 'react';
import { mockRegisterUser } from '../api/mockApi'; // Import mock API

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handles input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

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
          value={formData.username} // Controlled input
          onChange={handleChange} // Updates state
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email} // Controlled input
          onChange={handleChange} // Updates state
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password} // Controlled input
          onChange={handleChange} // Updates state
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;


