import ContactForm from '@/components/contact-form';

export default function ContactPage() {
  return (
    <section className="max-w-7xl w-full flex max-lg:flex-col max-lg:space-y-5 px-6 items-center fixed right-1/2 md:bottom-1/2 translate-x-1/2 md:translate-y-1/2 max-md:mt-10">
      <PhraseSection />
      <ContactForm />
    </section>
  );
}

function PhraseSection() {
  return (
    <div className="w-full lg:w-1/2 flex flex-col space-y-2 lg:space-y-5">
      <div className="font-extrabold text-xl md:text-2xl lg:text-4xl text-text1 lg:w-[90%]">
        <h1>Let&#39;s chat!</h1>
        <h1 className="mt-3 lg:mt-5 text-text2">
          Send me a message for collaboration or any questions.
        </h1>
      </div>
      <span className="text-base md:text-lg lg:text-xl font-semibold text-text3">
        Let&#39;s work together✌🏻
      </span>
    </div>
  );
}
