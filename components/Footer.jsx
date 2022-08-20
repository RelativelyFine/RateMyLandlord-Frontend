import React from "react";
import Image from "next/image";

const Footer = () => {
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      email: event.target.email.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/form";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response;
    alert(`Email Registered: ${result}`);
  };
  return (
    <div className="bg-[#313131] h-[230px] w-full">
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-3 h-full flex-col p-6">
          <div className="relative w-full h-[80%]">
            <Image src="/RMR.svg" alt="/" layout="fill" />
          </div>
          <div className="text-white text-[1.4vw] text-center xl:text-[1.9vh]">
            Student Housing Made Easy
          </div>
        </div>
        <div className="relative col-span-6">
          <div className="absolute left-[5%] top-[10%] -ml-0.5 w-0.5 h-[80%] bg-[#ffffff60]"></div>
          <div className="absolute right-[5%] top-[10%] -ml-0.5 w-0.5 h-[80%] bg-[#ffffff60]"></div>
        </div>
        <div className="grid place-items-center w-full h-full col-span-3">
          <span className="">
            <div className="text-white text-[4vw] lg:text-5xl">Subscribe</div>
            <div className="text-white text-[1.4vw] lg:text-1xl">
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">Enter your email address:</label>
                <input
                  className="max-w-[60%] text-black"
                  type="text"
                  id="email"
                  name="email"
                  required
                />
                <span className="pl-4">
                  <button
                    className="transition px-3 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-bold bg-[#254575] text-white"
                    type="submit"
                  >
                    Submit
                  </button>
                </span>
              </form>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
