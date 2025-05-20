import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEmailContext } from '../../StateManagement/EmailContext';
import login from '../../assets/login.png';
import vereda from '../../assets/vereda.png';

const OtpVerify = () => {
  const { email, setIsAuthenticated } = useEmailContext();
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [counter, setCounter] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const verifyOtp = async () => {
    setError('');
    if (!agreed) {
      setError('You must agree to the terms and conditions.');
      return;
    }
    try {
      const res = await fetch('https://vereda-temp-node-backend.onrender.com/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Failed to verify OTP');
      }
      setIsAuthenticated(true);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const resendOtp = () => {
    setCounter(30);
    fetch('https://vereda-temp-node-backend.onrender.com/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="flex md:w-1/2 bg-white flex-col items-center justify-center px-4 py-8 md:px-10 md:py-0">
        <img 
          src={vereda} 
          alt="Vereda Logo" 
          className="w-32 md:w-40 mb-4 md:mb-6" 
        />
        <h1 className="text-xl md:text-2xl font-semibold text-blue-700 text-center">
          Vereda: Digital learning
        </h1>
        <img 
          src={login} 
          alt="Learning Illustration" 
          className="mt-6 md:mt-8 w-full max-w-xs md:w-4/5 md:max-w-md" 
        />
      </div>

      <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-4 md:p-6">
        <div className="bg-white p-6 md:p-8 rounded-md shadow-md w-full max-w-sm">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-center">Get Started</h2>
         

          <p className="text-xs md:text-sm text-gray-700 mb-2">
            We have sent an OTP to your email, valid for 2 minutes
            <br />
            <span className="font-semibold text-black break-all">{email}</span>
          </p>

          <input
            type="text"
            placeholder="One Time Password"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
          />

          <div className="flex items-start mb-3 text-xs md:text-sm">
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mr-2 mt-1"
            />
            <label htmlFor="terms" className="leading-tight">
              By registering here, I agree to Vereda's{' '}
              <a href="/terms" className="text-blue-600 hover:underline">Terms & Conditions</a> and{' '}
              <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
            </label>
          </div>

          <div className="flex items-center justify-between text-xs md:text-sm text-gray-500 mb-3">
            <span>Resend OTP</span>
            <button
              disabled={counter !== 0}
              onClick={resendOtp}
              className={`ml-2 w-12 h-8 text-xs md:text-sm rounded border ${
                counter === 0 ? 'border-blue-500 text-blue-500' : 'border-gray-300 text-gray-400'
              }`}
            >
              {counter === 0 ? 'Send' : counter}
            </button>
          </div>

          <button
            onClick={verifyOtp}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md transition duration-200 text-sm md:text-base"
          >
            Register
          </button>

          {error && <p className="text-red-500 text-xs md:text-sm mt-3 md:mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default OtpVerify;