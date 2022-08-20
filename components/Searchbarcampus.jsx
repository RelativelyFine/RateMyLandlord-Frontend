import React from "react";

const Searchbar = () => {
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      prof: event.target.prof.value,
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
    <div className="flex relative top-[-5vh] justify-center flex-row">
      <div className="flex justify-center flex-row">
        <div className="p-4 bg-[#e7e7e7] grid place-items-center md:text-3xl xl:text-5xl rounded-l-3xl h-20 w-[20em] justify-self-center">
          <div className="w-full pl-6">
            <form onSubmit={handleSubmit}>
              <input
                className="relative top-0 max-w-[60%] outline-none text-grey bg-[#e7e7e7]"
                type="text"
                id="prof"
                name="prof"
                placeholder="Enter Your Professor"
                required
              />
              <span className="relative left-[54%] sm:left-[54%] md:left-[47%] lg:left-[44%]  ">
                <button
                  className="text-5xl transition px-3 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-bold bg-[#254575] text-white"
                  type="submit"
                >
                  S
                </button>
              </span>
            </form>
          </div>
        </div>
        <div className="p-4 bg-[#254575] rounded-r-3xl h-20 w-[6em] justify-self-center"></div>
      </div>
    </div>
  );
};

export default Searchbar;
