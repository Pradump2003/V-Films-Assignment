import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      setError("All fields are required.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");

    if (!validateForm()) return;

    try {
      const response = await fetch(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("✅ Form Submitted:", data);
        setSuccess("Form Submitted");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("❌ Error:", error);
      setError("Network error. Please try again later.");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col md:flex-row relative"
      style={{ backgroundImage: "url('/BG.png')" }}
    >
     
      <div className="w-full md:w-1/2 relative flex flex-col justify-center items-center p-20 md:p-6 lg:p-8">
        <p className="text-center md:text-left text-base sm:text-lg leading-relaxed">
          Whether you have an idea, a question, or simply want <br /> to explore
          how V can work together, V’re just a <br /> message away. <br /> Let’s
          catch up over coffee. <br /> Great stories always begin with a good
          conversation
        </p>

        
        <div className=" hidden md:flex absolute md:bottom-0 md:left-0">
          <img
            src="/Footer Vector (1).png"
            alt="footer vector"
            className="w-20 sm:w-28 md:w-48 h-auto"
          />
        </div>
      </div>

     
      <div className="w-full md:w-1/2 relative flex flex-col justify-center items-center p-6">
        <div className="flex flex-col justify-center items-center gap-2 text-center md:text-left">
          <h1 className="text-xl sm:text-2xl font-semibold">Join the Story</h1>
          <p className="text-base sm:text-lg">
            Ready to bring your vision to life? Let's talk.
          </p>
        </div>

        
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-6 w-full max-w-md"
        >
          <input
            name="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="px-3 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#B2431F]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            className="px-3 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#B2431F]"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your phone"
            value={formData.phone}
            onChange={handleChange}
            className="px-3 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#B2431F]"
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            className="px-3 py-2 border rounded-md w-full h-24 focus:outline-none focus:ring-2 focus:ring-[#B2431F]"
          ></textarea>

          {error && <p className="text-red-600 text-sm">{error}</p>}
          {success && (
            <p className="text-green-600 text-sm font-semibold">{success}</p>
          )}

          <button
            type="submit"
            className="inline-flex justify-center items-center gap-2 bg-[#B2431F] text-white py-2 rounded-full hover:bg-[#FF9D7DB2] hover:text-[#B2431F] transition w-full"
          >
            Submit
          </button>
        </form>

        
        <div className="flex flex-col sm:flex-row gap-2 mt-6 text-base font-bold text-[#B2431F] items-center justify-center md:justify-start">
          <a href="mailto:varnita@varnanfilms.co.in">
            varnita@varnanfilms.co.in
          </a>
          <span>|</span>
          <p>+91 98736884567</p>
        </div>

        
        <div className="hidden md:flex absolute md:top-0 md:right-0">
          <img
            src="/Footer Vector (2).png"
            alt="footer vector"
            className="w-20 sm:w-28 md:w-48 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
