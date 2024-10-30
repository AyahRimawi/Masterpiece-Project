import React, { useState } from "react";
import { Send, X } from "lucide-react";
import axios from "axios";

const ContactForm = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const response = await axios.post("/api/contact/submit", formData);

      if (response.data.success) {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you soon.",
        });
        setTimeout(() => {
          setIsOpen(false);
          setSubmitStatus({ type: "", message: "" });
        }, 2000);
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "Error sending message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={() => setIsOpen(false)}
      />

      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-lg">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-white/80 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
            <p className="text-blue-100">We'd love to hear from you!</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {submitStatus.message && (
              <div
                className={`p-3 rounded ${
                  submitStatus.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              <Send size={20} />
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default ContactForm;