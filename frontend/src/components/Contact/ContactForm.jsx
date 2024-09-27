import React, { useState } from "react";
import useRequestData from "../../hooks/useRequestData";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const { makeRequest, isLoading, error } = useRequestData();

  // Håndter ændringer i inputfelter
  const handleChange = ({ target: { name, value } }) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Håndter formularindsendelse
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await makeRequest(
      "http://localhost:4444/contact",
      "POST",
      null,
      formData,
    );

    // Hvis anmodningen er vellykket, markér formularen som indsendt
    if (response && !error) {
      setFormSubmitted(true);
    }
  };

  // Håndtering af loading- og fejltilstande
  if (isLoading) {
    return <div>Loading...</div>; // Vis loading meddelelse
  }

  if (error) {
    return <div>Error: {error}</div>; // Vis fejlmeddelelse
  }

  return (
    <section className="">
      <div className="mycontainer mb-14">
        <div className="flex h-[38em] w-full flex-col space-y-5 px-2 lg:h-[25em]">
          <div className="flex flex-col lg:flex-row">
            <div className="border-b-2 pb-5 lg:w-44 lg:border-b-0 lg:border-r-2 lg:pb-1">
              <h1 className="rubrik text-center lg:text-left">Kontakt</h1>
            </div>
            <div className="flex items-center py-4 lg:py-0">
              <p className="text-center lg:pl-5">
                Skulle du sidde med et spørgsmål eller to, så skriv endelig til
                os og vi vil kontakte dig hurtigst muligt
              </p>
            </div>
          </div>
          {/* Hvis formularen er blevet indsendt, vis da succesbesked */}
          {formSubmitted ? (
            <div className="bg-mygray py-10 text-center">
              <h1 className="mb-6 text-2xl font-bold text-green-500">Tak!</h1>
              <h2 className="text-gray-700">
                Vi har nu modtaget din besked :).
              </h2>
            </div>
          ) : (
            <div className="">
              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-4">
                {/* Eksplícit felter */}
                <div className="flex flex-col space-y-6 lg:flex-row lg:space-x-4 lg:space-y-0">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Dit navn"
                    className="w-full border bg-mygray py-4 pl-4 placeholder-black placeholder:font-medium"
                    required
                  />

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-mail"
                    className="w-full border bg-mygray py-4 pl-4 placeholder-black placeholder:font-medium"
                    required
                  />

                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Tlf"
                    className="w-full border bg-mygray py-4 pl-4 placeholder-black placeholder:font-medium"
                    required
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border bg-mygray py-4 pl-4 placeholder-black placeholder:font-medium"
                    rows="4"
                    placeholder="Besked"
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full border-2 border-primarycolor bg-primarycolor py-3 text-white hover:border-black hover:bg-white hover:text-black md:w-1/2 lg:w-1/4"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
