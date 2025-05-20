import React, { useState, useEffect } from "react";
import { useEmailContext } from "../../StateManagement/EmailContext";
import flutterPng from "../../assets/flutter.png";
import webDevPng from "../../assets/flutter.png";

const courses = [
  {
    id: "c1",
    name: "Full Stack Web Development Program",
    category: "Web Development",
    originalPrice: 50,
    discountedPrice: 40,
    discountPercent: 40,
    batch: "Coming Soon",
    seatsAvailable: 7,
    instructor: "Kingsley Orji",
    image: webDevPng,
  },
  {
    id: "c2",
    name: "Flutter Development Program",
    category: "Mobile Development",
    originalPrice: 50,
    discountedPrice: 28,
    discountPercent: 28,
    batch: "Coming Soon",
    seatsAvailable: 9,
    instructor: "Himanshu Kumar",
    image: flutterPng,
  },
];

export default function Courses() {
  const { email, isAuthenticated } = useEmailContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [loginPrompt, setLoginPrompt] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [error, setError] = useState(null);
  const [razorpayReady, setRazorpayReady] = useState(false);

  useEffect(() => {
    if (!window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => setRazorpayReady(true);
      script.onerror = () => setError("Failed to load payment SDK");
      document.body.appendChild(script);
    } else {
      setRazorpayReady(true);
    }
  }, []);

  const handleCourseClick = (course) => {
    if (!isAuthenticated) {
      setLoginPrompt(true);
      return;
    }
    setSelectedCourse(course);
    setModalOpen(true);
    setError(null);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedCourse(null);
    setLoginPrompt(false);
    setError(null);
    setPaymentLoading(false);
  };

  const handlePayment = async () => {
    if (!selectedCourse) return;
    setPaymentLoading(true);
    setError(null);
    try {
      const purchaseDetails = {
        purchase_id: "pur_" + Date.now(),
        user_id: email,
        course_id: selectedCourse.id,
        purchase_date: new Date().toISOString(),
        price: selectedCourse.discountedPrice,
        course_name: selectedCourse.name,
      };

      if (!razorpayReady) throw new Error("Payment SDK not ready.");

      const options = {
        key: "rzp_test_XOWDtFSdmw6x5S",
        amount: purchaseDetails.price * 100,
        currency: "INR",
        name: "Vereda",
        description: purchaseDetails.course_name,
        prefill: { email },
        handler: async (response) => {
          try {
            const res = await fetch("https://vereda-temp-node-backend.onrender.com/api/purchase", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...purchaseDetails,
                razorpay_payment_id: response.razorpay_payment_id,
              }),
            });

            if (!res.ok) throw new Error("Failed to save purchase");
            alert("Payment successful! Purchase saved.");
            handleClose();
          } catch (err) {
            setError("Payment succeeded but saving purchase failed.");
            console.error(err);
          } finally {
            setPaymentLoading(false);
          }
        },
        modal: { ondismiss: () => setPaymentLoading(false) },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (response) => {
        setError(`Payment failed: ${response.error.description}`);
        setPaymentLoading(false);
      });

      rzp.open();
    } catch (err) {
      setError(err.message || "An error occurred during payment.");
      setPaymentLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-blue-400 text-center text-sm tracking-widest mb-2 animate-pulse">
        FEATURED COURSES
      </h2>
      <h1 className="text-center text-2xl font-bold mb-10">Pick A Course To Get Started</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => handleCourseClick(course)}
            className="bg-white p-4 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer"
          >
            <img
              src={course.image}
              alt={course.name}
              className="rounded-md mb-4 w-full h-48 object-cover group-hover:brightness-110"
            />

            <div className="flex justify-between items-center mb-2">
              <span
                className={`px-3 py-1 text-xs font-bold rounded-full text-white ${
                  course.category === "Web Development" ? "bg-blue-600" : "bg-green-600"
                }`}
              >
                {course.category}
              </span>
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {course.discountPercent}% OFF
              </span>
            </div>

            <h3 className="text-lg font-semibold mb-1 text-gray-800 group-hover:text-blue-600">
              {course.name}
            </h3>

            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-blue-700">
                INR {course.discountedPrice.toLocaleString()}
              </span>
              <del className="text-gray-500 text-sm">
                INR {course.originalPrice.toLocaleString()}
              </del>
            </div>

            <div className="mt-2 text-sm text-gray-700">
              <strong>Batch:</strong> {course.batch} | <strong>Seats:</strong> {course.seatsAvailable}
            </div>
            <div className="mt-1 text-sm font-medium text-gray-600">
              Instructor: {course.instructor}
            </div>
          </div>
        ))}
      </div>

      {modalOpen && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-md animate-fade-in">
            <h2 className="text-xl font-bold mb-4">Confirm Purchase</h2>
            <p><strong>Course:</strong> {selectedCourse.name}</p>
            <p><strong>Price:</strong> INR {selectedCourse.discountedPrice.toLocaleString()}</p>
            <p><strong>Email:</strong> {email}</p>
            {error && <div className="mt-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>}
            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={handleClose}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
              >Cancel</button>
              <button
                onClick={handlePayment}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center"
                disabled={paymentLoading}
              >
                {paymentLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Pay Now"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {loginPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-80 text-center animate-fade-in">
            <h2 className="text-lg font-bold mb-4">Login Required</h2>
            <p className="mb-4">You must be logged in to purchase a course.</p>
            <button
              onClick={handleClose}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
