'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

import { sendContactEmail } from '@/service/contact';
import LoaderAnimation from './core/loader';

export type EmailData = {
  from: string;
  name: string;
  subject: string;
  message: string;
};

const DEFAULT_STATE = {
  from: '',
  name: '',
  subject: '',
  message: '',
};

const emailRegex =
  /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

export default function ContactForm() {
  const [form, setForm] = useState<EmailData>(DEFAULT_STATE);
  const [loading, setLoading] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormCompleted = () => {
    const { from, name, subject, message } = form;

    return !from || !name || !subject || !message || !isEmailValid()
      ? false
      : true;
  };

  const isEmailValid = () => {
    return emailRegex.test(form.from) ? true : false;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    sendContactEmail(form)
      .then((res) => {
        // openSuccessModal();
        setForm(DEFAULT_STATE);
      })
      // .catch(openErrorModal)
      .finally(() => setLoading(false));
  };

  return (
    <>
      <section className="relative w-full lg:w-1/2 shadow-xl rounded-xl border border-zinc-200 bg-cover bg-center">
        {loading && <Loader />}
        <section className="bg-background2 backdrop-blur-sm rounded-xl">
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto p-8 rounded-xl"
          >
            <div className="relative z-0 w-full mb-6 md:mb-8 group">
              <input
                value={form.from}
                type="email"
                name="from"
                autoFocus
                autoComplete="off"
                onChange={onChange}
                className={`block py-2.5 px-0 w-full text-sm text-text1 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 ${
                  isEmailValid() || !form.from
                    ? 'focus:border-blue-400'
                    : '!border-rose-400'
                } ${
                  isEmailValid() && 'border-green-400 focus:border-green-400'
                } peer`}
                placeholder=" "
              />
              <p
                className={`absolute -bottom-5 ${
                  isEmailValid() || !form.from ? 'invisible' : 'visible'
                } text-rose-400 text-xs`}
              >
                Please provide a valid email address.
              </p>
              <label
                htmlFor="from"
                className={`peer-focus:font-medium absolute text-sm text-text1 duration-200 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 ${
                  isEmailValid() || !form.from
                    ? 'peer-focus:text-blue-400'
                    : '!text-rose-400'
                } ${
                  isEmailValid() && 'text-green-400 peer-focus:text-green-400'
                } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
              >
                Email
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 md:mb-8 group">
              <input
                value={form.name}
                type="text"
                name="name"
                autoComplete="off"
                onChange={onChange}
                className="block py-2.5 px-0 w-full text-sm text-text1 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-400 peer"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-text1 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 md:mb-8 group">
              <input
                value={form.subject}
                type="text"
                name="subject"
                autoComplete="off"
                onChange={onChange}
                className="block py-2.5 px-0 w-full text-sm text-text1 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-400 peer"
                placeholder=" "
              />
              <label
                htmlFor="subject"
                className="peer-focus:font-medium absolute text-sm text-text1 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Subject
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 md:mb-8 group">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-text1 peer-focus:text-blue-400"
              >
                Your message
              </label>
              <textarea
                value={form.message}
                name="message"
                maxLength={200}
                spellCheck={false}
                onChange={onChange}
                className="block p-2.5 w-full h-24 resize-none text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-400 peer"
                placeholder="Write your message here..."
              ></textarea>{' '}
              <span className="absolute bottom-2 right-2 text-xs text-zinc-400">
                {form.message.length || 0} / 200
              </span>
            </div>
            <button
              type="submit"
              disabled={!isFormCompleted()}
              className={`text-white focus:outline-none font-semibold rounded-lg text-sm w-full px-5 py-2.5 duration-200 ease-out ${
                isFormCompleted()
                  ? 'bg-teal-600 hover:bg-teal-500'
                  : 'cursor-not-allowed bg-zinc-400'
              }`}
            >
              {loading ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </section>
      </section>
    </>
  );
}

function Loader() {
  return (
    <div className="absolute rounded-xl left-0 top-0 w-full h-full bg-white/10 flex items-center justify-center z-20">
      <LoaderAnimation />
    </div>
  );
}
