import React, { useState } from "react";
import useRequestData from "../../hooks/useRequestData";

const SubscripSection = () => {
  const [email, setEmail] = useState("");
  const { makeRequest } = useRequestData();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = { email };

    try {
      const response = await makeRequest(
        "http://localhost:4444/newssubscription",
        "POST",
        null,
        body,
      );

      if (response) {
        console.log("Subscription successful:", response);
        setEmail("");
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setIsSubmitted(false);
    }
  };

  return (
    <section className="">
      <div className="relative my-10 w-full">
        <img
          src="/src/assets/images/front/subscrip/newsmail-bg.jpg"
          alt="bg-tilmeld"
          className="h-[32em] w-full object-cover brightness-75 contrast-75 filter"
        />
        <article className="mycontainer">
          <div className="absolute inset-0 flex items-center justify-center">
            {isSubmitted ? (
              <p className="mycontainer flex h-20 items-center justify-center bg-black/60 p-4 text-xl font-semibold text-primarycolor">
                Du er nu tilmeldt vores nyhedsbrev!
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col px-4"
              >
                <div className="mx-auto space-y-5 pb-8 text-center text-white md:w-7/12 lg:w-4/6">
                  <h2 className="text-4xl font-bold leading-snug lg:text-6xl">
                    Tilmeld dig og få 25% rabat
                  </h2>
                  <h3 className="mx-auto text-2xl">
                    Tilmeld dig vores nyhedsbrev og få 25% rabat på din første
                    tur!
                  </h3>
                </div>
                <div className="mx-auto flex w-full flex-col  space-y-2  lg:space-x-2 lg:justify-between md:w-7/12 lg:w-6/12 lg:flex-row  lg:space-y-0 xl:max-w-[42em]">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Din E-mail"
                    required
                    className=" rounded-sm flex-grow  bg-mygray/45 py-5 pl-5 font-medium text-white placeholder-white ring-2 ring-mygray/20 focus:outline-none focus:ring-2 focus:ring-primarycolor lg:w-8/12"
                  />
                  <button
                    type="submit"
                    className="hover:bb rounded-sm border-2  border-primarycolor bg-primarycolor py-4 font-semibold text-white transition duration-500 hover:bg-black  lg:px-10"
                  >
                    Tilmeld
                  </button>
                </div>
              </form>
            )}
          </div>
        </article>
      </div>
    </section>
  );
};

export default SubscripSection;
