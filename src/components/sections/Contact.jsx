import { useState } from "react";
import { RevealOnScroll } from "src/components/RevealOnScroll";
import emailjs from "emailjs-com";

// eslint-disable-next-line react/prop-types
export const Contact = ({ isLightMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_s4k6toe',
        'template_1cnmlqh',
        e.target,
        'Qok5WzyLV3DmmuEK0'
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="w-full max-w-6xl px-4">
          {/* Get In Touch Section */}
          <div className="w-full mb-12">
            <h1 className={`text-4xl font-bold mb-8 bg-clip-text text-transparent text-center animate-fade-in animate-gradient ${
              isLightMode 
              ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400'
                : 'bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600'
            }`}>
              Send Me A Message
            </h1>

            <form
              className="mx-auto max-w-3xl space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              onSubmit={handleSubmit}
            >
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="Name..."
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="example@gmail.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="Your Message..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className={`w-full ${isLightMode ? 'bg-orange-500 hover:shadow-[0_0_15px_rgba(253,186,116,0.4)]':'bg-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'} text-white py-3 px-6 rounded font-medium transition-all duration-300 hover:-translate-y-0.5 `}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Me & Follow Me Sections */}
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-6">
            {/* Contact Me Section */}
            <div className="text-center bg-gray-800 p-8 rounded-lg shadow-lg animate-fade-in-up">
              <h4 className="text-xl font-semibold mb-5">Contact Me</h4>
              <div className="flex justify-center mx-14 space-x-14">

              <a
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=nurhardiansyah14@gmail.com"
                target="_blank" rel="noopener noreferrer"
                className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#EA4335] text-white font-semibold hover:-translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#B23121] hover:to-[#8A2518]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1.2em"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  fill="currentColor"
                  stroke="currentColor"
                  className="w-5"
                >
                  <path
                    d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 5.25L18.8 6H20M20 4H4C2.89 4 2 4.89 2 6v12C2 19.1 2.9 20 4 20h16c1.1 0 2-.9 2-2V6C22 4.89 21.1 4 20 4z"
                  ></path>
                </svg>
                <span
                  className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:translate-y-12 duration-700"
                >
                  nurhardiansyah14@gmail.com
                </span>
              </a>

              <a
                    href="https://wa.me/6288224004553"
                    target="_blank" rel="noopener noreferrer"
                    className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#25D366] text-white font-semibold hover:-translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#1DAF1A] hover:to-[#1A8E1A]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1.2em"
                      viewBox="0 0 24 24"
                      strokeWidth="1"
                      fill="currentColor"
                      stroke="currentColor"
                      className="w-5"
                    >
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"
                    ></path>
                    </svg>
                    <span
                      className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:translate-y-12 duration-700 whitespace-nowrap"
                    >
                      (+62) 882-2400-4553
                    </span>
                  </a> 
                  </div>                 
            </div>

            {/* Follow Me Section */}
            <div className="text-center bg-gray-800 p-8 rounded-lg shadow-lg animate-fade-in-up">
              <h4 className="text-xl font-semibold mb-6">Follow Me</h4>
              <div className="flex justify-center space-x-6">

                    <a
                    href="https://www.linkedin.com/in/rinaldinur/"
                    target="_blank" rel="noopener noreferrer"
                    className="group flex justify-center p-2  rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold hover:-translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                  >

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1.1em"
                      viewBox="0 0 512 512"
                      strokeWidth="0"
                      fill="currentColor"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
                      ></path>
                    </svg>
                    <span
                      className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:translate-y-12 duration-700"
                    >
                      rinaldinur
                    </span>
                  </a>
  

                  <a
                    href="https://github.com/Rinaldinur-14"
                    target="_blank" rel="noopener noreferrer"
                    className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-black text-white font-semibold hover:-translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 15 15"
                      className="w-5"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        fill="currentColor"
                        d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                      ></path>
                    </svg>
                    <span
                      className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:translate-y-12 duration-700 whitespace-nowrap"
                    >
                      Rinaldinur-14
                    </span>


                  </a>

  
                  <a
                    href="https://www.instagram.com/rinaldinur_14?igsh=MWM5a3RrNnhsazk4YQ=="
                    target="_blank" rel="noopener noreferrer"
                    className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#a21caf] text-white font-semibold hover:-translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1.2em"
                      viewBox="0 0 24 24"
                      strokeWidth="1"
                      fill="currentColor"
                      stroke="currentColor"
                      className="w-5"
                    >
                      <path
                        d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"
                      ></path>
                    </svg>
                    <span
                      className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:translate-y-12 duration-700"
                    >
                      rinaldinur_14
                    </span>
                  </a>





              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};








