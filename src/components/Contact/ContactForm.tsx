import {  useState } from "react";
import Swal from "sweetalert2";
import { BounceLoader } from "react-spinners";
import { useFormik } from "formik";
import * as Yup from "yup";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required name, please write your name'),
      email: Yup.string().email('Invalid email address').required('Required, please write your email'),
      subject: Yup.string().required('Required subject, please write your subject'),
      message: Yup.string().required('Required message, please write your message'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      setLoading(true); // Mostrar loader

      try {
        const response = await fetch('http://localhost:5000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            to: values.email,
            subject: values.subject,
            text: values.message
          })
        });
        setLoading(false); // Ocultar loader
        setSubmitting(false); // Habilitar el botón de envío
        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Email Sent',
            text: 'Your email was sent successfully!',
          });
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue?',
            icon: 'error',
            confirmButtonText: 'Cool'
          });
        }
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
        });
        console.error('Error sending email:', error);
      }
    },
  });

  return (
    <div className="relative">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-75 z-50">
          <BounceLoader color="#3498db" />
        </div>
      )}
      <form onSubmit={formik.handleSubmit} className={loading ? 'opacity-50 pointer-events-none' : ''}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-mono text-base text-center">Name</label>
          <input
            type="text"
            id="name"
            {...formik.getFieldProps('name')}
            className={`mt-1 block w-full bg-transparent border-2 text-black border-b-black border-transparent focus:outline-none${formik.touched.name && formik.errors.name ? 'border-red-500' : ''}`}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm font-bold">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-md text-center font-mono text-base ">Email</label>
          <input
            type="email"
            id="email"
            {...formik.getFieldProps('email')}
            className={`mt-1 block w-full bg-transparent border-2 text-black border-b-black border-transparent focus:outline-none ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm font-bold">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 text-md text-center font-mono text-base ">Subject</label>
          <input
            type="text"
            id="subject"
            {...formik.getFieldProps('subject')}
            className={`mt-1 block w-full bg-transparent border-2 text-black border-b-black border-transparent focus:outline-none ${formik.touched.subject && formik.errors.subject ? 'border-red-500' : ''}`}
          />
          {formik.touched.subject && formik.errors.subject ? (
            <div className="text-red-500 text-sm font-bold">{formik.errors.subject}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-md text-center font-mono text-base ">Message</label>
          <textarea
            id="message"
            rows={4}
            {...formik.getFieldProps('message')}
            className={`mt-1 block w-full rounded-md text-black focus:outline-none bg-transparent border-2 border-black ${formik.touched.message && formik.errors.message ? 'border-red-500' : ''}`}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-500 text-sm font-bold">{formik.errors.message}</div>
          ) : null}
        </div>

        <div className="mt-6">
          <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600" disabled={loading || formik.isSubmitting}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
