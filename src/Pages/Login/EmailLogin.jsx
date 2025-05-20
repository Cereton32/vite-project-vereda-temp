import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEmailContext } from '../../StateManagement/EmailContext';
import login from '../../assets/login.png';
import vereda from '../../assets/vereda.png';

const EmailLogin = () => {
  const { setEmail } = useEmailContext();
  const [inputEmail, setInputEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const sendOtp = async () => {
    setError('');
    setLoading(true); 
    try {
      const res = await fetch('https://vereda-temp-node-backend.onrender.com/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: inputEmail })
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Failed to send OTP');
      }
      setEmail(inputEmail);
      navigate('/verify-otp');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden md:flex w-1/2 bg-white flex-col items-center justify-center px-10">
        <img src={vereda} alt="Vereda Logo" className="w-40 mb-4" />
        <img src={login} alt="Learning Illustration" className="mt-8 w-4/5 max-w-md" />
      </div>

      <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-md shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-semibold mb-4 text-center">Get Started</h2>
          <p className="text-center text-sm text-gray-600 mb-4">
            Already Get about Vereda Technologies
            <a className="text-blue-600 hover:underline"> Loggin In </a>
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={sendOtp}
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md transition duration-200 flex items-center justify-center"
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 01-8 8z"></path>
              </svg>
            ) : (
              'Send OTP'
            )}
          </button>

          {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default EmailLogin;
