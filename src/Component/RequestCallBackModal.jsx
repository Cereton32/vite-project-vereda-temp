import React, { useState, useEffect } from 'react';

export default function RequestCallBackModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    occupation: '',
    state: '',
    language: '',
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Focus on the first input when the modal opens
    const firstInput = document.querySelector('input[name="name"]');
    if (firstInput) {
      firstInput.focus();
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://vereda-temp-node-backend.onrender.com/api/request-callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("Submitted successfully!");
        handleClose();
      } else {
        alert("Submission failed!");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // wait for animation
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-40">
    
      <div
        className={`relative z-10 bg-white w-full sm:max-w-md h-full sm:h-auto sm:rounded-md shadow-lg transform transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="p-6 overflow-auto h-full sm:h-auto">
          <button onClick={handleClose} className="text-xl font-bold float-right">
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-4 mt-2">Talk to Our Expert</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            {['name', 'email', 'phone', 'country', 'occupation', 'state'].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            ))}
            <select
              name="language"
              value={formData.language}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Language</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Other">Other</option>
            </select>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}