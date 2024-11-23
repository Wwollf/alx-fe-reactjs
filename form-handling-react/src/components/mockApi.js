export const mockRegisterUser = async (formData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData.email === 'test@example.com') {
          reject({ message: 'Email already registered' });
        } else {
          resolve({ message: 'Registration successful' });
        }
      }, 1000);
    });
  };
  