import { useRef, FormEvent, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export const Support: React.FC = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          import.meta.env.VITE_SOPPORT_SERVICE_ID,
          import.meta.env.VITE_SOPPORT_TEMPLATE_ID,
          formRef.current,
          { publicKey: import.meta.env.VITE_SOPPORT_PUBLIC_KEY }
        );
        toast.success('Email sent successfully');
        setFormData({
          user_name: '',
          user_email: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('FAILED...', error);
      toast.error('Failed to send email');
    }
  };

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form ref={formRef} onSubmit={sendEmail} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Support</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_name">Name</label>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_email">Email</label>
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-primeColor hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
