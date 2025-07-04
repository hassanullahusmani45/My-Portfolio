import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [value, setValue] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;


    emailjs
      .sendForm(
        "service_profile",
        "template_profile",
        form.current,
        "DKjoE37BFsgyw-dTf"
      )
      .then(
        (result) => {
          console.log("Message Sent:", result.text);
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.error("Error:", error.text);
          alert("There was an error sending your message. Please try again.");
        }
      );
    setValue("");
    form.current.reset(); // Reset the form after sending
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-4 w-full md:w-lg bg-slate-800 p-6 mx-auto border border-slate-700 shadow shadow-cyan-600 rounded-xl "
    >
      <div className="text-white text-lg">Email Me 🚀</div>
      <div className="relative">
        <input type="text" id="name" autoComplete="off" className="block px-4 pb-2 pt-3.5 w-full text-sm text-slate-50 bg-sla rounded-full border-1 border-cyan-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-400 peer"
          name="name"
          placeholder=" "
          required
        />
        <label htmlFor="name" className="absolute text-sm text-cyan-300 duration-300 transform -translate-y-4 scale-90 top-2 z-10 origin-[0] bg-slate-800 px-1 peer-focus:px-2 peer-focus:text-orange-400  peer-placeholder-shown:scale-90 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-100 peer-focus:-translate-y-4 start-4">* Name</label>
      </div>
      <div className="relative">
        <input type="email" id="email" autoComplete="off" className="block px-4 pb-2 pt-3.5 w-full text-sm text-slate-50 bg-transparent rounded-full border-1 border-cyan-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-400 peer"
          name="email"
          placeholder=" "
          required
        />
        <label htmlFor="email" className="absolute text-sm text-cyan-300 duration-300 transform -translate-y-4 scale-90 top-2 z-10 origin-[0] bg-slate-800 px-1 peer-focus:px-2 peer-focus:text-orange-400  peer-placeholder-shown:scale-90 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-100 peer-focus:-translate-y-4 start-4">* Email addres</label>
      </div>
      <div className="relative">
        <input type="text" id="subject" autoComplete="off" className="block px-4 pb-2 pt-3.5 w-full text-sm text-slate-50 bg-transparent rounded-full border-1 border-cyan-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-400 peer"
          name="title"
          placeholder=" "
          required
        />
        <label htmlFor="subject" className="absolute text-sm text-cyan-300 duration-300 transform -translate-y-4 scale-90 top-2 z-10 origin-[0] bg-slate-800 px-1 peer-focus:px-2 peer-focus:text-orange-400  peer-placeholder-shown:scale-90 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-100 peer-focus:-translate-y-4 start-4">* Subject</label>
      </div>
      <div className="relative w-full">
        <textarea
          id="message"
          name="message"
          rows={4}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder=" "
          required
          className="block w-full p-4 text-sm text-slate-50 bg-transparent rounded-2xl border border-cyan-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-400 peer resize-y"
        />
        <label
          htmlFor="message"
          className={`absolute left-4 text-sm bg-slate-800 px-1 duration-300 transform origin-[0] ${value
            ? "top-2 scale-100 -translate-y-4 text-orange-400"
            : "peer-placeholder-shown:top-4 peer-placeholder-shown:scale-90 peer-placeholder-shown:-translate-y-1/2 text-cyan-300 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 peer-focus:text-orange-400"
            }`}
        >
          * Enter your message
        </label>
      </div>


      <div className="flex justify-center items-center">
        <button type="submit" className=" hover:cursor-pointer bg-cyan-600 hover:bg-cyan-500 text-white py-2.5 px-5 rounded-full text-sm shadow shadow-white transition-all">
          Send Message
        </button>
      </div>

    </form>
  );
}
